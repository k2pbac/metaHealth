DROP TABLE IF EXISTS patient_records CASCADE;
DROP TABLE IF EXISTS patient_accounts CASCADE;
DROP TABLE IF EXISTS employee_accounts CASCADE;
DROP TABLE IF EXISTS clinics CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;

CREATE TABLE employee_accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  is_doctor BOOLEAN DEFAULT NULL,
);

CREATE TABLE patient_records (
  id SERIAL PRIMARY KEY NOT NULL,
  information VARCHAR(255) NOT NULL,
  medication_prescribed VARCHAR(255) NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL,
  employee_account_id INTEGER REFERENCES employee_accounts(id) ON DELETE CASCADE
);

CREATE TABLE patient_accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  date_of_birth VARCHAR NOT NULL,
  profile_description VARCHAR DEFAULT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  insurance_member_id VARCHAR(255) DEFAULT NULL,
  insurance_policy_number VARCHAR(255) DEFAULT NULL,
  insurance_plan_name VARCHAR(255) DEFAULT NULL,
  medical_history_id INTEGER DEFAULT NULL,
);

--Will need to update this table (normalize)
CREATE TABLE clinics (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  patient_account_id INTEGER REFERENCES patient_accounts(id) ON DELETE CASCADE,
  employee_account_id INTEGER UNIQUE REFERENCES employee_accounts(id) ON DELETE CASCADE
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  date timestamp NOT NULL,
  active BOOLEAN NOT NULL,
  clinic_id INTEGER REFERENCES clinics(id) ON DELETE CASCADE,
  patient_account_id INTEGER REFERENCES patient_accounts(id) ON DELETE CASCADE,
  employee_account_id INTEGER REFERENCES employee_accounts(id) ON DELETE CASCADE
);
