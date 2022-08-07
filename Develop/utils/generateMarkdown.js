// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE"){
    return ""
  } else {
    return `![license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (readmeInfo) => {
  return `
  ## ${readmeInfo.title}

  ### Created by: ${readmeInfo.name}
  <a href="https://github.com/${readmeInfo.name}">Github: ${readmeInfo.name} </a>

  ## Table Of Contents
  
  *[Project Description](#project-description)
  *[License Information](#license-information)
  *[Installion Instructions](#installion-instruction)
  *[Usage Information](#usage-information)
  *[Project Contribution](#project-contributions)
  *[Testing Instructions](#testing-instructions)
  *[Contact](#contact)
  

  ## Project Description
  ${readmeInfo.description}

  ## License Information
  ${renderLicenseBadge(readmeInfo.license)}

  ## Installion Instructions
  ${readmeInfo.instructions}

  ## Usage Information
  ${readmeInfo.information}

  ## Project Contributions
  ${readmeInfo.guidelines}

  ## Testing Instructions
  ${readmeInfo.testing}

  ## Contact 
  ${readmeInfo.email}

 `;
}

module.exports = generateMarkdown;
