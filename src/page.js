import image from "./bbq.jpg";

function loadPage() {
    const divContentElement = document.querySelector('div#content');
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';
    const title = document.createElement('h1');
    title.innerHTML = "Howie Grillz";
    const bbqImage = document.createElement('img');
    bbqImage.src = image;

    logoContainer.appendChild(title);
    logoContainer.appendChild(bbqImage);

    divContentElement.appendChild(logoContainer);

    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';
    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.innerHTML = "About Us";
    const aboutUsParagraph = document.createElement('p');
    aboutUsParagraph.innerHTML = "What started out as a weekend hobby to share with family and friendz..Turned into a passion for Howie to provide comfort and food for the soulz. We serve a texas style bbq  with a Cali twist.";

    const operatingHoursTitle = document.createElement('h1');
    operatingHoursTitle.innerHTML = "Operating Hours";
    const operatingHoursPara = document.createElement('p');
    operatingHoursPara.innerHTML = "Wednesday	10 AM–8 PM <br> Thursday	10 AM–8 PM <br> Friday	10 AM–8 PM <br> Saturday	Closed <br> Sunday	Closed <br> Monday	10 AM–8 PM <br> Tuesday	10 AM–8 PM";

    infoContainer.appendChild(aboutUsTitle);
    infoContainer.appendChild(aboutUsParagraph);
    infoContainer.appendChild(operatingHoursTitle);
    infoContainer.appendChild(operatingHoursPara);
    divContentElement.appendChild(infoContainer);

}


export { loadPage };