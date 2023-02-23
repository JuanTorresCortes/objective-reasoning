// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function isAdmin(user) {
  console.table(user);
  let typeOfUser = user.userRole; //REGULAR_USER
  if (typeOfUser !== "ADMIN") {
    return false;
  } else {
    return true;
  }
}

function getEmail(user) {
  console.table(user);
  let firstName = user.firstName.toLowerCase();
  let lastName = user.lastName.toLowerCase();
  let emailfiy = "@codeimmersives.com";
  let dot = ".";
  let fullEmail = `${firstName}${dot}${lastName}${emailfiy}`;
  //console.log(fullEmail);
  return fullEmail;
}

function getPlaylistLength(playlist) {
  //console.table(playlist)
  numOfSongs = playlist.songs.length;
  return numOfSongs;
}

function getHardestHomework(arrOfHomeWork) {
  let length = arrOfHomeWork.length;
  if (length === 0) {
    return "";
  } else if (length === 1) {
    for (const homework of arrOfHomeWork) {
      let onlyOne = homework.name;
      return onlyOne;
    }
  } else if (length >= 1) {
    let allGrades = [];

    for (const homework of arrOfHomeWork) {
      /// push all scores to empty arr;
      allGrades.push(homework.averageScore);
    }
    let min = Math.min(...allGrades); //find out what score is lowest;

    for (const homework of arrOfHomeWork) {
      // this loop gos through obj in arr;

      if (homework.averageScore === min) {
        // this if statement will compare lowest score in obj and the min;
        let hardest = homework.name;
        return hardest;
      }
    }
  }
}
////////////////not my code i didnt get this one ////////////////
function createPhonebook(arrNames, arrNum) {

  let phoneBook = {};
for(let i = 0; i < arrNames.length; i++){
        phoneBook[arrNames[i]] = arrNum[i]
}
  return phoneBook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === "undefined") {
  isAdmin = undefined;
}
if (typeof getEmail === "undefined") {
  getEmail = undefined;
}
if (typeof getPlaylistLength === "undefined") {
  getPlaylistLength = undefined;
}
if (typeof getHardestHomework === "undefined") {
  getHardestHomework = undefined;
}
if (typeof createPhonebook === "undefined") {
  createPhonebook = undefined;
}

module.exports = {
  isAdmin,
  getEmail,
  getPlaylistLength,
  getHardestHomework,
  createPhonebook,
};
