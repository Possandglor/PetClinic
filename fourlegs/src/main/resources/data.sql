CREATE TABLE "CLIENTS" (
    ClientID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    PhoneNumber VARCHAR(255),
    Email VARCHAR(255),
    Address VARCHAR(255)
);

CREATE TABLE Pets (
    PetID INT PRIMARY KEY,
    Name VARCHAR(255),
    Species VARCHAR(255),
    Breed VARCHAR(255),
    BirthDate DATE,
    Gender VARCHAR(50)
);

CREATE TABLE PetOwners (
    ClientID INT,
    PetID INT,
    PRIMARY KEY (ClientID, PetID),
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Specialization VARCHAR(255),
    PhoneNumber VARCHAR(255),
    Email VARCHAR(255)
);

CREATE TABLE Visits (
    VisitID INT PRIMARY KEY,
    PetID INT,
    EmployeeID INT,
    VisitDate DATE,
    Reason TEXT,
    Notes TEXT,
    FOREIGN KEY (PetID) REFERENCES Pets(PetID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

CREATE TABLE Prescriptions (
    PrescriptionID INT PRIMARY KEY,
    VisitID INT,
    Medication VARCHAR(255),
    Dosage VARCHAR(255),
    Duration VARCHAR(255),
    Instructions TEXT,
    FOREIGN KEY (VisitID) REFERENCES Visits(VisitID)
);

CREATE TABLE PrescriptionTemplates (
    TemplateID INT PRIMARY KEY,
    TemplateName VARCHAR(255),
    Medication VARCHAR(255),
    Dosage VARCHAR(255),
    Duration VARCHAR(255),
    Instructions TEXT
);

CREATE TABLE Shifts (
    ShiftID INT PRIMARY KEY,
    EmployeeID INT,
    ShiftDate DATE,
    StartTime TIME,
    EndTime TIME,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

CREATE TABLE Files (
    FileID INT PRIMARY KEY,
    VisitID INT,
    PetID INT,
    UploadDate TIMESTAMP,
    FileName VARCHAR(255),
    FileType VARCHAR(50),
    FilePath VARCHAR(255),
    FOREIGN KEY (VisitID) REFERENCES Visits(VisitID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);
