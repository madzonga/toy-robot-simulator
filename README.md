# toy-robot-simulator

> The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.


## General Information
- The application is a simulation of a toy robot moving on a square tabletop, of
dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must
be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form -
    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT
- PLACE will put the toy robot on the table in position X,Y and facing NORTH,
SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any
sequence of commands may be issued, in any order, including another PLACE command. The
application should discard all commands in the sequence until a valid PLACE command has
been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without
changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but
standard output is sufficient.
- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and
REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application. (file input commands.txt)


## Dependencies and Tech used
- node
- npm
- ts-node
- jest
- joi


## Setup
Ensure `npm 8.x.x`, `node 14.18.3` and `ts-node 10.x.x` are installed
For compatibility purposes it's best to just use the node version mentioned above (though you're welcome to try run the app with the version you have installed on your computer first). 
- To install a specific version, use `n`.
- npm install -g n   # Install n globally
- sudo n 14.18.3

Continue: 
- git clone git@github.com:madzonga/toy-robot-simulator.git
- cd toy-robot-simulator
- npm install


## Usage
- cd src
- ts-node index.ts commands.txt

To run tests
- npm test

## Contact
Created by Glenn Madzonga
