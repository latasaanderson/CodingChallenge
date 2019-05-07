# MobileDeviceKeyboard

What is this

        A command line interface that allows the interactive entry of training text and also allows the
        user to provide word fragments and get autocomplete suggestions in return.

How to Test

        The user has 3 options on the command line:
        *    1 - search
        *    2 - train
        *    3 - quit 

        search - The user can type in searches for words that match the fragment.  The fragment must be a prefix to the word.

        train - The user can teach the AutocompleteProvider by inputting words or sentences.

Installation

        - Must have Node.Js and Node Package Manager (NPM).  I tested with Node.Js version 11.6; however, a fairly recent version of Node.Js should work.
        - To install all dependencies from a package.json file, execute this in the terminal : npm install
        - Execute the script: node AutocompleteTest.js
