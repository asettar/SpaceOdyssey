let favoritesMissions = {};
let missionsData = [
  {
    "id": 1,
    "name": "Apollo 11",
    "agency": "NASA",
    "objective": "First manned moon landing",
    "launchDate": "1969-07-16",
    "picture": "pictures/apollo11.png",
    "description": "First humans walked on the Moon."
  },
  {
    "id": 2,
    "name": "Curiosity",
    "agency": "NASA",
    "objective": "Explore Gale Crater on Mars",
    "launchDate": "2011-11-26",
    "picture": "pictures/curiosity.png",
    "description": "Mars rover studying climate and geology."
  },
  {
    "id": 3,
    "name": "Artemis I",
    "agency": "NASA",
    "objective": "Test the SLS launch system and Orion spacecraft",
    "launchDate": "2022-11-16",
    "picture": "pictures/artemis1.png",
    "description": "Uncrewed test mission for Moon exploration."
  },
  {
    "id": 4,
    "name": "Voyager 1",
    "agency": "NASA",
    "objective": "Explore the outer solar system",
    "launchDate": "1977-09-05",
    "picture": "pictures/voyager1.png",
    "description": "Studying outer planets and interstellar space."
  },
  {
    "id": 5,
    "name": "James Webb Space Telescope",
    "agency": "NASA/ESA/CSA",
    "objective": "Observe the early universe",
    "launchDate": "2021-12-25",
    "picture": "pictures/jwst.png",
    "description": "Observes first galaxies and exoplanets."
  },
  {
    "id": 6,
    "name": "Tianwen-1",
    "agency": "CNSA",
    "objective": "Explore Mars with orbiter, lander, and rover",
    "launchDate": "2020-07-23",
    "picture": "pictures/mission7.png",
    "description": "Mars mission with orbiter, lander, and rover."
  },
  {
    "id": 7,
    "name": "Mars Pathfinder",
    "agency": "NASA",
    "objective": "Demonstrate landing technology and explore Mars",
    "launchDate": "1996-12-04",
    "picture": "pictures/mission8.png",
    "description": "Tested new landing technology and explored Mars."
  },
  {
    "id": 8,
    "name": "Cassini–Huygens",
    "agency": "NASA/ESA/ASI",
    "objective": "Study Saturn, its rings, and moons",
    "launchDate": "1997-10-15",
    "picture": "pictures/mission7.png",
    "description": "Studied Saturn, its rings, and moons."
  },
  {
    "id": 9,
    "name": "Sputnik 1",
    "agency": "USSR",
    "objective": "First artificial satellite",
    "launchDate": "1957-10-04",
    "picture": "pictures/mission10.png",
    "description": "First artificial satellite to orbit Earth."
  }
];


function    createNewMission(mission) {
    let missionGrid = document.querySelector(".missions-grid");
    let newMissionElement = document.createElement('div');
    newMissionElement.classList.add('mission');
    newMissionElement.innerHTML = `
    <div class="mission-card">
        <img src="${mission.picture}" alt="${mission.name}" >
        <p><b>${mission.name}</b>, launched by ${mission.agency} on ${mission.launchDate},
        ${mission.description}</p>
    </div>
    <div class = "add-del-fav"> 
        <img src="pictures/fav-empty.png" alt="" id = "fav-icon${mission.id}" onclick="toggleFavoriteIcon(${mission.id})">
        <img src="pictures/delete-icon (1).png" alt="">
        <img src="pictures/edit-icon.png" alt="">
    </div>
    `

    console.log("from creation");
    console.log(newMissionElement);
    console.log(mission);
    console.log(newMissionElement.innerHTML);
    missionGrid.appendChild(newMissionElement);
}



function toggleFavoriteIcon(missionId) {
    let favIcon = document.getElementById(`fav-icon${missionId}`);
    if (!favoritesMissions[missionId]) {
        favIcon.setAttribute('src', 'pictures/fav-full.png')
        favoritesMissions[missionId] = 1;
    }
    else {
        favIcon.setAttribute('src', 'pictures/fav-empty.png');
        favoritesMissions[missionId] = 0;
    } 
}

// main 
for (let mission of missionsData) {
    console.log(typeof(mission), mission);
    createNewMission(mission);
}


