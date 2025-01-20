# UEN Validation Service

## Overview

The UEN Validation Service is a simple JavaScript-based command-line application that checks the validity of a Unique Entity Number (UEN) in Singapore. It ensures the input adheres to specified formats.

## Features

- Validates UEN formats as per the official criteria.
- Provides user-friendly feedback on validity.
- Simple and lightweight implementation.

## Prerequisites

- Node.js installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).

## How to Run the Application

1. Clone or download the repository containing the code.
2. Navigate to the directory containing the `uen_validation_service.js` file.
3. Open a terminal and run the following command to install dependencies (if any):
   ```bash
   npm install
   ```
   _(Note: No external dependencies are required for this script.)_
4. Execute the script using Node.js:
   ```bash
   node uen_validation_service.js
   ```
5. Follow the on-screen prompt to enter a UEN for validation.

## Example Usage

```bash
$ node uen_validation_service.js
UEN Validation Service
====================
Enter a UEN to validate: T1234567A
The UEN 'T1234567A' is valid.
```

## Code Explanation

- **Validation Function**: A regular expression is used to ensure the UEN adheres to formats such as `T1234567A`, `S12345678B`, etc.
- **Command-Line Interface**: The `readline` module enables interactive user input and output in the terminal.

## Support

For issues or feature requests, please contact Sheena at sheenaloo.works@gmail.com.
