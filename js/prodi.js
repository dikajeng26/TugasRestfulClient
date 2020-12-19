// const baseUrl = "http://localhost/tugasrestfulserver/index.php/";
// const token = "API-TOKEN=9012345678";
// const ProdiUrl = `${baseUrl}prodi?${token}`;

// const contents = document.querySelector("#content-list");
// const title = document.querySelector(".card-title");

// function getListProdi(){
// 	// tittle.innerHTML="Kelasmen Sementara Liga Primer Inggris";
// 	fetch(ProdiUrl)
// 		.then(response => response.json())
// 		.then(resJson=>{
//             console.log(resJson);
// 			// let prodi = "";
// 			let i = 1;
// 			// resJson.forEach(prodies=>{
// 				innerHTML= `
// 					<tr>
// 						<td>${i++}.</td>
// 						<td>${resJson.jenjang}</td>
// 						<td>${resJson.prodi}</td>
// 					</tr>
// 			   `
// 			// });
// 			// contents.innerHTML = `
// 			// 	<div class="card">
// 			// 		<table class="striped responsive-table centered">
// 			// 			<thead style="background-color:#D08450">
// 			// 				<tr>
// 			// 					<th>NO</th>
// 			// 					<th>LOGO</th>
// 			// 					<th>NAMA</th>
// 			// 					<th>MAIN</th>
// 			// 					<th>MENANG</th>
// 			// 					<th>DRAW</th>
// 			// 					<th>KALAH</th>
// 			// 					<th>POINTS</th>
// 			// 				</tr>
// 			// 			</thead>
// 			// 			<tbody style="background-color:#E9B798">
// 			// 				${standings}
// 			// 			</tbody>
// 			// 		</table>
// 			// 	</div>
// 			// `
// 		}).catch(err=>{
// 			console.error(err);
// 		})
// }

// document.addEventListener('DOMContentLoaded', function (){
// 	// var elems = document.querySelectorAll('.table');
//     // var instances = M.Table.init(elems);
//     getListProdi();
// });