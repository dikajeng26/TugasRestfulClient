const baseUrl = "https://www.news.developeridn.com/";
const EkonomiPoin = `${baseUrl}ekonomi`;
const OlahragaPoin = `${baseUrl}olahraga`;
const TeknologiPoin = `${baseUrl}teknologi`;
const HiburanPoin = `${baseUrl}hiburan`;
const GayahidupPoin = `${baseUrl}gaya-hidup`;

const contents = document.querySelector("#content-list");
const tittle = document.querySelector(".card-tittle");
const ViewModal = document.querySelector(".modal");

function getEconomy(){
	tittle.innerHTML="Berita Mengenai Ekonomi";
	fetch(EkonomiPoin)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(economy=>{
				data +=`
				<li class="collection-item avatar" style="background-color:#E9B798">
					<img src="${economy.poster}" alt="" width="300px">
					<p><span class="title"><b><h5>${economy.judul}</h5></b></span>
					<b>Diambil dari</b> : ${economy.link} <br>
					<b>Waktu</b> : ${economy.waktu} <br>
					</p>
					<center><a href="#modal1" data-link="${economy.link}" class="secondary-content modal-trigger"><i class="material-icons" data-link="${economy.link}">info</i><br>Klik Untuk Baca</a></center>
			  </li>
			   `
			});
			contents.innerHTML = `<ul class="collection">`+data+'</ul>';
			const tombol = document.querySelectorAll('.secondary-content');
			tombol.forEach(button=>{
				 button.onclick=(event) =>{
					TampilData(baseUrl + "detail/?url=" + event.target.dataset.link);
				 }
			})
		}).catch(err=>{
			console.error(err);
		})
}

function getSports(){
	tittle.innerHTML="Berita Mengenai Olahraga";
	fetch(OlahragaPoin)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(sports=>{
				data +=`
				<li class="collection-item avatar" style="background-color:#E9B798">
					<img src="${sports.poster}" alt="" width="300px">
					<p><span class="title"><b><h5>${sports.judul}</h5></b></span>
					<b>Diambil dari</b> : ${sports.link} <br>
					<b>Waktu</b> : ${sports.waktu} <br>
					</p>
					<center><a href="#modal1" data-link="${sports.link}" class="secondary-content modal-trigger"><i class="material-icons" data-link="${sports.link}">info</i><br>Klik Untuk Baca</a></center>
			  </li>
			   `
			});
			contents.innerHTML = `<ul class="collection">`+data+'</ul>';
			const tombol = document.querySelectorAll('.secondary-content');
			tombol.forEach(button=>{
				 button.onclick=(event) =>{
					TampilData(baseUrl + "detail/?url=" + event.target.dataset.link);
				 }
			})
		}).catch(err=>{
			console.error(err);
		})
}

function getTechnology(){
	tittle.innerHTML="Berita Mengenai Teknologi";
	fetch(TeknologiPoin)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(technology=>{
				data +=`
				<li class="collection-item avatar" style="background-color:#E9B798">
					<img src="${technology.poster}" alt="" width="300px">
					<p><span class="title"><b><h5>${technology.judul}</h5></b></span>
					<b>Diambil dari</b> : ${technology.link} <br>
					<b>Waktu</b> : ${technology.waktu} <br>
					</p>
					<center><a href="#modal1" data-link="${technology.link}" class="secondary-content modal-trigger"><i class="material-icons" data-link="${technology.link}">info</i><br>Klik Untuk Baca</a></center>
			  </li>
			   `
			});
			contents.innerHTML = `<ul class="collection">`+data+'</ul>';
			const tombol = document.querySelectorAll('.secondary-content');
			tombol.forEach(button=>{
				 button.onclick=(event) =>{
					TampilData(baseUrl + "detail/?url=" + event.target.dataset.link);
				 }
			})
		}).catch(err=>{
			console.error(err);
		})
}

function getEntertainment(){
	tittle.innerHTML="Berita Mengenai Hiburan";
	fetch(HiburanPoin)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(entertainment=>{
				data +=`
				<li class="collection-item avatar" style="background-color:#E9B798">
					<img src="${entertainment.poster}" alt="" width="300px">
					<p><span class="title"><b><h5>${entertainment.judul}</h5></b></span>
					<b>Diambil dari</b> : ${entertainment.link} <br>
					<b>Waktu</b> : ${entertainment.waktu} <br>
					</p>
					<center><a href="#modal1" data-link="${entertainment.link}" class="secondary-content modal-trigger"><i class="material-icons" data-link="${entertainment.link}">info</i><br>Klik Untuk Baca</a></center>
			  </li>
			   `
			});
			contents.innerHTML = `<ul class="collection">`+data+'</ul>';
			const tombol = document.querySelectorAll('.secondary-content');
			tombol.forEach(button=>{
				 button.onclick=(event) =>{
					TampilData(baseUrl + "detail/?url=" + event.target.dataset.link);
				 }
			})
		}).catch(err=>{
			console.error(err);
		})
}

function getLifeStyle(){
	tittle.innerHTML="Berita Mengenai Gaya Hidup";
	fetch(GayahidupPoin)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(lifestyle=>{
				data +=`
				<li class="collection-item avatar" style="background-color:#E9B798">
					<img src="${lifestyle.poster}" alt="" width="300px">
					<p><span class="title"><b><h5>${lifestyle.judul}</h5></b></span>
					<b>Diambil dari</b> : ${lifestyle.link} <br>
					<b>Waktu</b> : ${lifestyle.waktu} <br>
					</p>
					<center><a href="#modal1" data-link="${lifestyle.link}" class="secondary-content modal-trigger"><i class="material-icons" data-link="${lifestyle.link}">info</i><br>Klik Untuk Baca</a></center>
			  </li>
			   `
			});
			contents.innerHTML = `<ul class="collection">`+data+'</ul>';
			const tombol = document.querySelectorAll('.secondary-content');
			tombol.forEach(button=>{
				 button.onclick=(event) =>{
					TampilData(baseUrl + "detail/?url=" + event.target.dataset.link);
				 }
			})
		}).catch(err=>{
			console.error(err);
		})
}

function TampilData(link){
	// contents.innerHTML="Link bos : "+link;
	fetch(link)
		.then(response => response.json())
		.then(resJson=>{
			console.log(resJson.data);
			let data = "";
			resJson.data.forEach(datatekno=>{
				data +=`
				<center>
				<div class="card-image">
					<img class="responsive-img"  src="${datatekno.poster}" width="500px"><br>
				</div>
				</center>
				<div class="modal-content">
                            <h4><b>${datatekno.judul}</b></h4>
								<p>
								<center>---------------------------------------------------</center><br>
                                    ${datatekno.body}<br>
								</p>
								<center>---------------------------------------------------</center><br>
                        </div>
                        <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">TUTUP</a>
						</div>
				</div>
				`
			})
			ViewModal.innerHTML = `<ul class="collection">`+data+'</ul>';
			})
			.catch(err=>{
				console.error(err);
		})
}

function loadPage(page){
	switch(page){
		case "ekonomi":
			getEconomy();
			break;
		case "olahraga":
			getSports();
			break;
		case "teknologi":
			getTechnology();
			break;
		case "hiburan":
			getEntertainment();
			break;
		case "gayahidup":
			getLifeStyle();
			break;
	}
}

document.addEventListener('DOMContentLoaded', function (){
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);
	// getEconomy();

	document.querySelectorAll(".sidenav a, .topnav a").forEach(elm=>{
		elm.addEventListener("click", evt=>{
			let sideNav = document.querySelector(".sidenav");
			M.Sidenav.getInstance(sideNav).close();
			page = evt.target.getAttribute("href").substr(1);
			loadPage(page);
		})
	})

	var page = window.location.hash.substr(1);
	if (page === "" || page === "!" ) page = "ekonomi";

	var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

	loadPage(page); 
});