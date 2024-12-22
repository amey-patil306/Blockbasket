/*
  # Dairy Supply Chain Database Schema

  1. New Tables
    - collection_centre
      - id (uuid, primary key)
      - batch_no (text, unique)
      - farmer_id (text)
      - quantity_of_milk (numeric)
      - breed_of_cow (text)
      - timestamp (timestamptz)
      - location (text)
    
    - logistics
      - id (uuid, primary key)
      - batch_no (text, references collection_centre)
      - distance_travelled (numeric)
      - temperature (numeric)
      - receiving_location (text)
      - timestamp (timestamptz)
      - environment_conditions (text)
    
    - distributor
      - id (uuid, primary key)
      - batch_no (text, references collection_centre)
      - distributor_id (text)
      - receiving_timestamp (timestamptz)
      - quantity (numeric)
      - storage_conditions (text)
      - location (text)
    
    - shop
      - id (uuid, primary key)
      - batch_no (text, references collection_centre)
      - timestamp (timestamptz)
      - storage_conditions (text)
      - number_of_packets_received (integer)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read and write data
*/

-- Collection Centre table
CREATE TABLE collection_centre (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text UNIQUE NOT NULL,
  farmer_id text NOT NULL,
  quantity_of_milk numeric NOT NULL CHECK (quantity_of_milk > 0),
  breed_of_cow text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Logistics table
CREATE TABLE logistics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL REFERENCES collection_centre(batch_no),
  distance_travelled numeric NOT NULL CHECK (distance_travelled >= 0),
  temperature numeric NOT NULL,
  receiving_location text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  environment_conditions text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Distributor table
CREATE TABLE distributor (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL REFERENCES collection_centre(batch_no),
  distributor_id text NOT NULL,
  receiving_timestamp timestamptz DEFAULT now(),
  quantity numeric NOT NULL CHECK (quantity > 0),
  storage_conditions text NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Shop table
CREATE TABLE shop (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL REFERENCES collection_centre(batch_no),
  timestamp timestamptz DEFAULT now(),
  storage_conditions text NOT NULL,
  number_of_packets_received integer NOT NULL CHECK (number_of_packets_received > 0),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE collection_centre ENABLE ROW LEVEL SECURITY;
ALTER TABLE logistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE distributor ENABLE ROW LEVEL SECURITY;
ALTER TABLE shop ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Enable read access for authenticated users" ON collection_centre
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable write access for authenticated users" ON collection_centre
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" ON logistics
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable write access for authenticated users" ON logistics
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" ON distributor
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable write access for authenticated users" ON distributor
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" ON shop
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable write access for authenticated users" ON shop
  FOR INSERT TO authenticated WITH CHECK (true);

-- Create indexes
CREATE INDEX idx_collection_centre_batch_no ON collection_centre(batch_no);
CREATE INDEX idx_logistics_batch_no ON logistics(batch_no);
CREATE INDEX idx_distributor_batch_no ON distributor(batch_no);
CREATE INDEX idx_shop_batch_no ON shop(batch_no);