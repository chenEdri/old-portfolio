'use strict';
var protLength = 5;



$(document).ready(onInit)

function onInit() {
    creatProtfolios();
    renderProtfolio();
}

function renderProtfolio() {
    var htmlStr = `  
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Portfolio</h2>
          <h3 class="section-subheading text-muted">My-Projects</h3>
        </div>
      </div>
      <div class="row">`;
    gProt.forEach(project => {
        htmlStr += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onOpenModal('${project.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.name}.PNG" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.description}</p>
        </div>
      </div>`
    });
    htmlStr += ` </div>
    </div>`;
    var $elProtArea = $('#portfolio');
    $elProtArea.html(htmlStr);
}


function onOpenModal(id){
  console.log(id);
  var project = getProjectById(id);
  console.log(project);
  var $elModal   = $('.modal-body');
  console.log($elModal);
  var htmlStr = `  <h2>${project.name}</h2>
  <p class="item-intro text-muted">${project.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.name}.PNG" alt="">
  <p>${project.description}</p>
  <ul class="list-inline">
    <li>Date: ${project.publishAt}</li>
    <li>Client: Threads</li>
    <li>Category: ${project.lables}</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`;
    $elModal.html(htmlStr);
}