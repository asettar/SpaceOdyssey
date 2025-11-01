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
    "picture": "pictures/curiosity.jpg",
    "description": "Mars rover studying climate and geology."
  },
  {
    "id": 3,
    "name": "Artemis I",
    "agency": "NASA",
    "objective": "Test the SLS launch system and Orion spacecraft",
    "launchDate": "2022-11-16",
    "picture": "pictures/artemis1.jpg",
    "description": "Uncrewed test mission for Moon exploration."
  },
  {
    "id": 4,
    "name": "Voyager 1",
    "agency": "NASA",
    "objective": "Explore the outer solar system",
    "launchDate": "1977-09-05",
    "picture": "pictures/voyager1.jpg",
    "description": "Studying outer planets and interstellar space."
  },
  {
    "id": 5,
    "name": "Rosetta",
    "agency": "ESA",
    "objective": "Study comet 67P/Churyumov-Gerasimenko",
    "launchDate": "2004-03-02",
    "picture": "pictures/rosetta.jpg",
    "description": "Orbited and landed on a comet."
  },
  {
    "id": 6,
    "name": "James Webb Space Telescope",
    "agency": "NASA/ESA/CSA",
    "objective": "Observe the early universe",
    "launchDate": "2021-12-25",
    "picture": "pictures/jwst.jpg",
    "description": "Observes first galaxies and exoplanets."
  },
  {
    "id": 7,
    "name": "BepiColombo",
    "agency": "ESA/JAXA",
    "objective": "Explore the planet Mercury",
    "launchDate": "2018-10-20",
    "picture": "pictures/bepicolombo.jpg",
    "description": "Mission to study Mercury's surface and environment."
  }
];



function    createNewMission(mission) {
    let missionGrid = document.querySelector(".missions-grid");
    let newMissionElement = document.createElement('div');
    newMissionElement.classList.add('mission');
    newMissionElement.innerHTML = `
    <div class="mission-card">
        <img src="${mission.picture}" alt="${mission.name}">
        <p><b>${mission.name}</b>, launched by ${mission.agency} on ${mission.launchDate},
        ${mission.description}</p>
    </div>
    <div class = "add-del-fav"> 
        <img src="pictures/fav-empty.png" alt="">
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

function checkFavorites() {
    console.log("heellooo");
    console.log(missionsData);
}



// main 
for (let mission of missionsData) {
    console.log(typeof(mission), mission);
    createNewMission(mission);
    break;
}



