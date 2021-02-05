// main.js

let volumeSlider = document.getElementById("volume-slider");
let volumeNumber = document.getElementById("volume-number");

let volumeImage = document.getElementById("volume-image");

let radioAirHorn = document.getElementById("radio-air-horn");
let radioCarHorn = document.getElementById("radio-car-horn");
let radioPartyHorn = document.getElementById("radio-party-horn");

let hornImage = document.getElementById("sound-image");

let hornSound = document.getElementById("horn-sound");

let honkButton = document.getElementById("honk-btn");

volumeSlider.addEventListener("input", function() {
	updateVolume(volumeSlider.value);
});

volumeNumber.addEventListener("input", function() {
	updateVolume(volumeNumber.value);
});

radioAirHorn.addEventListener("input", function() {
	hornImage.src = "./assets/media/images/air-horn.svg";
	hornImage.alt = "Air Horn"

	hornSound.src = "./assets/media/audio/air-horn.mp3"
});

radioCarHorn.addEventListener("input", function() {
	hornImage.src = "./assets/media/images/car.svg";
	hornImage.alt = "Car"

	hornSound.src = "./assets/media/audio/car-horn.mp3"
});

radioPartyHorn.addEventListener("input", function() {
	hornImage.src = "./assets/media/images/party-horn.svg";
	hornImage.alt = "Party Horn"

	hornSound.src = "./assets/media/audio/party-horn.mp3"
});

document.getElementById("party-horn-form").onsubmit = function() { 
	hornSound.play();
    return false;
}

function updateVolume(volume) {
	// Update input values
	volumeSlider.value = volume;
	volumeNumber.value = volume;

	// Update icon
	if (volume <= 0) {
		volumeImage.src = "./assets/media/icons/volume-level-0.svg";
	} else if (volume <= 33) {
		volumeImage.src = "./assets/media/icons/volume-level-1.svg";
	} else if (volume <= 66) {
		volumeImage.src = "./assets/media/icons/volume-level-2.svg";
	} else {
		volumeImage.src = "./assets/media/icons/volume-level-3.svg";
	}

	if (volume == 0) {
		honkButton.disabled = true;
	} else {
		honkButton.disabled = false;
	}

	hornSound.volume = volume / 100;
}