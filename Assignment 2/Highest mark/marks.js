function findHighestMarks(marks) {
    var highestMarks = marks[0];
  
    for (var i = 1; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    console.log("Highest marks:", highestMarks);
  }
  
  // Example usage:
  var marks = [85, 92, 78, 95, 89];
  findHighestMarks(marks); // Highest marks: 95
  