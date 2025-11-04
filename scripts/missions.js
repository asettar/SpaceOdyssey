let favoritesMissions = new Set();
let idToMission = new Map();   //=> for fast look up
let elementToData = new Map(); //from html mission card element to mission data;
let lastId = 10;
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

function missionAlreadyExist(missionId) {
	for (let o of missionsData) {
		if (o["id"] == missionId) return 1;
	}
	return 0;
}

function    createNewMission(mission) {
	console.log("from creation: ", mission["id"]);
    let missionGrid = document.querySelector(".missions-grid");
    let newMissionElement = document.createElement('div');
    newMissionElement.classList.add('mission');
    newMissionElement.innerHTML = `
    <div class="mission-card mission-card${mission["id"]}">
        <img src="${mission.picture}" alt="${mission.name}" >
        <p><b>${mission.name}</b>, launched by ${mission.agency} on ${mission.launchDate},
        ${mission.description}</p>
    </div>
    <div class = "add-del-fav"> 
        <img src="pictures/fav-empty.png" alt="" id = "fav-icon${mission["id"]}" onclick="toggleFavoriteIcon(${mission["id"]})">
        <img src="pictures/delete-icon (1).png" alt="" id = "del-icon${mission["id"]}">
        <img src="pictures/edit-icon.png" alt="" id = "edit-icon${mission["id"]}">
    </div>
    `;
	console.log("from creation: ", mission["id"]);
    missionGrid.appendChild(newMissionElement);
	idToMission.set(mission["id"], mission);
    elementToData.set(newMissionElement, mission);
    let deleteBtn = document.getElementById(`del-icon${mission["id"]}`);
    deleteBtn.addEventListener('click', () => {
        deleteMission(mission, newMissionElement);
    });
    
    let editBtn = document.getElementById(`edit-icon${mission["id"]}`);
    console.log(editBtn);
    editBtn.addEventListener('click', () => {
        editMission(mission);
    });
}

function  updateMissionCard(missionData) {
	console.log("hello from update", missionData["id"])
	console.log("is it found: ",missionAlreadyExist(missionData["id"]));
	let missionCard = document.querySelector(`.mission-card${missionData["id"]}`);
	console.log(missionCard);
	let inputs = document.querySelectorAll('form input');
	inputs.forEach((elem, index) => {
		missionData[elem.name] = elem.value;
	});

	if (!missionAlreadyExist(missionData["id"])) {
		createNewMission(missionData);
		missionsData.push(missionData);
		return ;
	}
	console.log(missionData);
	console.log(missionCard.innerHTML);
	missionCard.innerHTML = `
    <div class="mission-card mission-card${missionData["id"]}">
        <img src="${missionData.picture}" alt="${missionData.name}" >
        <p><b>${missionData.name}</b>, launched by ${missionData.agency} on ${missionData.launchDate},
        ${missionData.description}</p>
    </div>`;
	console.log(missionCard.innerHTML);
}


function	isValidMissionForm() {
    let inputs = document.querySelectorAll('form input');
	for (let input of inputs) {
		let p = document.getElementById(`${input.name}-error`);
		if (!input.value) {
			p.innerHTML = "this feild is required";
			input.style["border-bottom"] = '1px solid red';
			input.focus();
			return false;
		}
		else {
			p.innerHTML = "";
			input.style["border-bottom"] = '1px solid green';	
		}
	}
	return true;
}

function	addEditMissionSubmitEvents(missionData) {
	console.log("Hello from addition of handlers", missionData["id"]);
	console.log("is it found: ",missionAlreadyExist(missionData["id"]));
    let missionEditForm = document.querySelector('.mission-edit-section');
    let cancelBtn = document.getElementById('cancel-edit');  
    let confirmBtn = document.getElementById('confirm-edit');
	console.log(confirmBtn);
	let errors = document.querySelectorAll('.mission-edit-form p');
	console.log(cancelBtn, errors.length);
	errors.forEach((elem, index) => {
		errors[index].innerHTML = "";
	});
	
	cancelBtn.replaceWith(cancelBtn.cloneNode(true));
	confirmBtn.replaceWith(confirmBtn.cloneNode(true));
	cancelBtn = document.getElementById('cancel-edit');  
    confirmBtn = document.getElementById('confirm-edit');

	console.log(errors);
    cancelBtn.addEventListener('click', (event) => {
		console.log("cancel from=>", missionData["id"]);
		event.preventDefault();
      	missionEditForm.style.display = 'none';
	});
	
    confirmBtn.addEventListener('click', (event) => {
		console.log("confirm from=>", missionData["id"]);
		event.preventDefault();
		if (isValidMissionForm() == true) {
			updateMissionCard(missionData);
			missionEditForm.style.display = 'none';
		}
	});
	
	console.log(cancelBtn);
	console.log(confirmBtn);
}

function    editMission(missionData) {
    console.log("from edit");
	console.log("is it found: ",missionAlreadyExist(missionData["id"]));
    let missionEditForm = document.querySelector(".mission-edit-section");
    missionEditForm.style.display = 'block';
    let inputs = document.querySelectorAll('form input');
    console.log(inputs);
	// need to change name of header from edit to add if it's a new mission
	console.log(missionEditForm.firstElementChild);
	console.log(missionEditForm.firstElementChild);
	if (!missionAlreadyExist(missionData["id"])) missionEditForm.firstElementChild.innerHTML = "Add new mission";
	else missionEditForm.firstElementChild.innerHTML = "Edit mission";
    // write missiondata into input values;
	inputs.forEach((elem, index) => {
		  inputs[index].value = missionData[inputs[index].name];
		  inputs[index].style['border-bottom'] = '1.5px solid black';   // reupdate border styles
	});
    addEditMissionSubmitEvents(missionData);
}


function    deleteMission(missionData, missionElement) {
    console.log("Hello from delete");
    // console.log(missionElement, missionElement.innerHTML);
    const deletePopUp = document.querySelector('.delete-popup');
    let confirmBtn = document.getElementById('delete-confirm');
    let cancelBtn = document.getElementById('delete-cancel');
    console.log(cancelBtn);
    deletePopUp.style.display = 'flex';
    confirmBtn.addEventListener('click', () => {
		missionsData = missionsData.filter((elem) => (elem["id"] !== missionData["id"]));
        missionElement.remove();
		if (favoritesMissions.has(missionData["id"]))
				favoritesMissions.delete(missionData["id"]);
        deletePopUp.style.display = 'none';
    });
    cancelBtn.addEventListener('click', () => {
        deletePopUp.style.display = 'none';
    });
}

function toggleFavoriteIcon(missionId) {
    let favIcon = document.getElementById(`fav-icon${missionId}`);
    if (!favoritesMissions.has(missionId)) {
        favIcon.setAttribute('src', 'pictures/fav-full.png')
        favoritesMissions.add(missionId);
    }
    else {
        favIcon.setAttribute('src', 'pictures/fav-empty.png');
        favoritesMissions.delete(missionId);
    } 
}

function	createNewFavoriteCard(id) {
	let missionData = idToMission.get(id);
	console.log("favorite id: ", id, missionData);
	let newCard = document.createElement('div');
	newCard.classList.add('favorite-card');
	newCard.innerHTML = `
		<img src="${missionData.picture}">
    	<p>"${missionData.name}, launched by "${missionData.agency}"  on "${missionData.launchDate}",
		it's objective is to "${missionData.objective}.</p>
	`;
	return newCard;
}

function	closeFavoritePopup() {
	let	favoritesSection = document.querySelector('.favorites-section');
	favoritesSection.style.display = 'none';
	let	favoritesCards = document.querySelectorAll('.favorite-card');
	favoritesCards.forEach((elem, index) => {
		favoritesCards[index].remove();
	}) 
}

function	showFavorites() {
	console.log("favourites");
	for (let id of favoritesMissions) {
		console.log(id);
		console.log(idToMission.get(id));
	}

	let	favoritesSection = document.querySelector('.favorites-section');
	console.log(favoritesSection);
	favoritesSection.style.display = 'block';

	favoritesContainer = document.querySelector('.favorites-popup');
	
	for (let id of favoritesMissions) {
		const newfFavoritecard = createNewFavoriteCard(id);
		favoritesContainer.appendChild(newfFavoritecard);
	}
}

function	addNewMission() {
	lastId++;
	console.log("last id ", lastId);
	let newMissionData = {"id" : lastId,
		"name": "","agency": "", "objective": "","launchDate": "",
		"picture": "", "description": ""};
	console.log("new mission id", newMissionData["id"]);
	editMission(newMissionData);
}


function    agencyNotFound(wantedAgency, missionAgency) {
    console.log(missionAgency);
    let agencies = missionAgency.split('/');
    agencies = agencies.filter((elem) => (elem === wantedAgency));
    return (agencies.length == 0);
}

function    noMatchedData(value, missionData) {
    value = value.trim();
    if (value === missionData["name"] || value === missionData["objective"]
        || value === missionData["agency"] || missionData["agency"].split('/').find((e) => e === value)
        || value === missionData["launchDate"] || missionData["launchDate"].split('-').find((e) => e === value))
        return false;

    return true;
}

function    shouldBefiltered(missionElement) {
    const missionData = elementToData.get(missionElement);

    console.log("filter");
    console.log(missionElement);
    
    console.log(missionData);
    if (!missionData) return true;
    let agencyFilter = document.getElementById("agency-filter");
    let yearFilter = document.getElementById("year-filter");
    let searchFilter = document.getElementById("search-filter");

    if ((agencyFilter.value !== "" && agencyNotFound(agencyFilter.value, missionData["agency"]))
        || (yearFilter.value !== "" && missionData["launchDate"].split('-').find((e) => e == yearFilter.value) === undefined))
        return true;
    if (searchFilter.value && noMatchedData(searchFilter.value, missionData)) return true;
    return false;
}

function    filterMissions() {
    let missionCards = document.querySelectorAll('.mission');
    console.log(missionCards);
    for (let missionElement of missionCards) {
        console.log(missionElement);
        if (shouldBefiltered(missionElement)) 
            missionElement.style.display = 'none';
        else missionElement.style.display = 'flex';
    }
}

// main 
for (let mission of missionsData) {
	createNewMission(mission);
    console.log(typeof(mission), mission);
}


// for debugging 
// for (let [key, val] of elementToData) {
//     console.log(typeof(key));
//     console.log(key);
//     console.log(typeof(val), val);
//     console.log("=========");
// }

// let missionCards = document.querySelectorAll('.mission');
// console.log(missionCards);
// for (let mission of missionCards) {
//     console.log(mission);
//     console.log(elementToData.has(mission));
//     console.log(elementToData.get(mission));
// }

// let agencyFilter = document.getElementById('agency-filter');
// console.log(agencyFilter, agencyFilter.value);
// let yearFilter = document.getElementById('year-filter');
// console.log(yearFilter);

window.addEventListener('load', () => {
    let agencyFilter = document.getElementById('agency-filter');
    let yearFilter = document.getElementById('year-filter');
    agencyFilter.value = "";
    yearFilter.value = "";
    filterMissions();
});
