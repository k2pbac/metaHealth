DROP TABLE IF EXISTS patient_records CASCADE;
DROP TABLE IF EXISTS patient_accounts CASCADE;
DROP TABLE IF EXISTS employee_accounts CASCADE;
DROP TABLE IF EXISTS clinics CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS registered CASCADE;


CREATE TABLE clinics (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  website TEXT DEFAULT NULL,
  phone_number VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT NULL,
  clinic_owner_id INTEGER NOT NULL,
  ein_number VARCHAR(10) DEFAULT NULL,
  insurance_number VARCHAR(30) DEFAULT NULL,
  tax_id_number VARCHAR(30) DEFAULT NULL
);

CREATE TABLE employee_accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  gender VARCHAR(255) DEFAULT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT NULL,
  is_doctor BOOLEAN DEFAULT FALSE,
  clinic_verified BOOLEAN DEFAULT FALSE,
  clinic_id INTEGER REFERENCES clinics(id) 
);

CREATE TABLE patient_accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  date_of_birth VARCHAR NOT NULL,
  gender VARCHAR DEFAULT NULL,
  profile_description VARCHAR DEFAULT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT NULL,
  health_card_number VARCHAR(255) DEFAULT NULL,
  insurance_member_id VARCHAR(255) DEFAULT NULL,
  insurance_policy_number VARCHAR(255) DEFAULT NULL,
  insurance_plan_name VARCHAR(255) DEFAULT NULL
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  patient_notes TEXT DEFAULT NULL,
  date timestamp NOT NULL,
  active BOOLEAN NOT NULL,
  clinic_id INTEGER REFERENCES clinics(id) ON DELETE CASCADE,
  patient_account_id INTEGER REFERENCES patient_accounts(id) ON DELETE CASCADE,
  employee_account_id INTEGER REFERENCES employee_accounts(id) ON DELETE CASCADE
);

CREATE TABLE patient_records (
  id SERIAL PRIMARY KEY NOT NULL,
  information TEXT,
  created_at timestamp default CURRENT_DATE,
  updated_at timestamp DEFAULT NULL,
  updated_by VARCHAR(255) DEFAULT NULL, 
  medication_prescribed TEXT,
  date_of_symptoms timestamp default CURRENT_DATE,
  referral VARCHAR(255) default NULL,
  patient_id INTEGER DEFAULT NULL,
  appointment_id INTEGER DEFAULT NULL
);

CREATE TABLE registered (
  id SERIAL PRIMARY KEY NOT NULL,
  clinic_id INTEGER REFERENCES clinics(id) ON DELETE CASCADE,
  patient_account_id INTEGER REFERENCES patient_accounts(id) ON DELETE CASCADE
);

