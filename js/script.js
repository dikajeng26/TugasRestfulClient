const baseUrl = "http://localhost/tugasrestfulserver/index.php/";
const token = "API-TOKEN=9012345678";
const ProdiUrl = `${baseUrl}prodi?${token}`;
const JenisPembayaranUrl = `${baseUrl}jenispembayaran?${token}`;
const JenisPenggunaUrl = `${baseUrl}jenispengguna?${token}`;
                        
const contents = document.querySelector("#content-list");
const title = document.querySelector(".card-title");

function getListProdi(){
	// tittle.innerHTML="Kelasmen Sementara Liga Primer Inggris";
	fetch(ProdiUrl)
	  .then(response => response.json())
	  .then(resJson=>{
		console.log(resJson.data);
		let data = "";
		let i = 1;
		resJson.data.forEach(prodigy=>{
		  data += `
			<tr>
			  <td>${i++}.</td>
			  <td>${prodigy.jenjang}</td>
			  <td>${prodigy.prodi}</td>
			</tr>
		   `
		});
		contents.innerHTML = `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- Ionicons -->
		<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
		<!-- Tempusdominus Bootstrap 4 -->
		<link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
		<!-- iCheck -->
		<link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
		<!-- JQVMap -->
		<link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
		<!-- Theme style -->
		<link rel="stylesheet" href="css/adminlte.min.css">
		<!-- overlayScrollbars -->
		<link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
		<!-- Daterange picker -->
		<link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
		<!-- summernote -->
		<link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- DataTables -->
		<link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

		<div class="content-wrapper">
		<section class="content-header">
		<div class="container-fluid">
			<div class="row md-9">
			<div class="col-sm-6">
				<h1>Data Prodi</h1>
			</div>
			</div>
		</div><!-- /.container-fluid -->
		</section>
		<section class="content">
		  <div class="container-fluid">
			<div class="row">
			  <div class="col-12">
				<div class="card">
				  <div class="card-header">
					<h3 class="card-title">Data yang menampilkan isi dari berbagai jurusan yang ada di ITN Malang</h3>
				  </div>
				<div class="card">
				  <!-- /.card-header -->
				  <div class="card-body">
					<table id="example1" class="table table-bordered table-striped">
					  <thead>
					  <tr>
						<th>NOMOR</th>
						<th>JENJANG</th>
						<th>PRODI</th>
					  </tr>
					  </thead>
					  <tbody>
					   ${data}
					  </tbody>
					  <tfoot>
					  <tr>
						<th>NOMOR</th>
						<th>JENJANG</th>
						<th>PRODI</th>
					  </tr>
					  </tfoot>
					</table>
				  </div>
				  <!-- /.card-body -->
				</div>
				<!-- /.card -->
			  </div>
			  <!-- /.col -->
			</div>
			<!-- /.row -->
		  </div>
		  <!-- /.container-fluid -->
		</section>
		</div>

		<!-- jQuery -->
		<script src="plugins/jquery/jquery.min.js"></script>
		<!-- Bootstrap 4 -->
		<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
		<!-- DataTables  & Plugins -->
		<script src="plugins/datatables/jquery.dataTables.min.js"></script>
		<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
		<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
		<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
		<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
		<script src="plugins/jszip/jszip.min.js"></script>
		<script src="plugins/pdfmake/pdfmake.min.js"></script>
		<script src="plugins/pdfmake/vfs_fonts.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
		<!-- AdminLTE App -->
		<script src="js/adminlte.min.js"></script>
		<!-- AdminLTE for demo purposes -->
		<script src="js/demo.js"></script>
		<!-- Page specific script -->
		`
		$(function () {
			$("#example1").DataTable({
			  "responsive": true, "lengthChange": false, "autoWidth": false,
			  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
			}).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
			$('#example2').DataTable({
			  "paging": true,
			  "lengthChange": false,
			  "searching": false,
			  "ordering": true,
			  "info": true,
			  "autoWidth": false,
			  "responsive": true,
			});
		  });

	  }).catch(err=>{
		console.error(err);
	  })
  }

  function getListJenisPembayaran(){
	// tittle.innerHTML="Kelasmen Sementara Liga Primer Inggris";
	fetch(JenisPembayaranUrl)
	  .then(response => response.json())
	  .then(resJson=>{
		console.log(resJson.data);
		let data = "";
		let i = 1;
		resJson.data.forEach(jnsbyr=>{
		  data += `
			<tr>
			  <td>${i++}.</td>
			  <td>${jnsbyr.virtual}</td>
			  <td>${jnsbyr.jenis_pembayaran}</td>
			</tr>
		   `
		});
		contents.innerHTML = `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- Ionicons -->
		<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
		<!-- Tempusdominus Bootstrap 4 -->
		<link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
		<!-- iCheck -->
		<link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
		<!-- JQVMap -->
		<link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
		<!-- Theme style -->
		<link rel="stylesheet" href="css/adminlte.min.css">
		<!-- overlayScrollbars -->
		<link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
		<!-- Daterange picker -->
		<link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
		<!-- summernote -->
		<link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- DataTables -->
		<link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

		<div class="content-wrapper">
		<section class="content-header">
		<div class="container">
			<div class="row lg-9">
			<div class="col-lg-6">
				<h1>Data Prodi</h1>
			</div>
			</div>
		</div><!-- /.container-fluid -->
		</section>
		<section class="content">
		  <div class="container">
			<div class="row">
			  <div class="col-12">
				<div class="card">
				  <div class="card-header">
					<h3 class="card-title">Data yang menampilkan isi dari berbagai jurusan yang ada di ITN Malang</h3>
				  </div>
				<div class="card">
				  <!-- /.card-header -->
				  <div class="card-body">
					<table id="example1" class="table table-bordered table-striped">
					  <thead>
					  <tr>
						<th>NOMOR</th>
						<th>NO VIRTUAL</th>
						<th>JENIS PEMBAYARAN</th>
					  </tr>
					  </thead>
					  <tbody>
					   ${data}
					  </tbody>
					  <tfoot>
					  <tr>
						<th>NOMOR</th>
						<th>NO VIRTUAL</th>
						<th>JENIS PEMBAYARAN</th>
					  </tr>
					  </tfoot>
					</table>
				  </div>
				  <!-- /.card-body -->
				</div>
				<!-- /.card -->
			  </div>
			  <!-- /.col -->
			</div>
			<!-- /.row -->
		  </div>
		  <!-- /.container-fluid -->
		</section>
		</div>

		<!-- jQuery -->
		<script src="plugins/jquery/jquery.min.js"></script>
		<!-- Bootstrap 4 -->
		<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
		<!-- DataTables  & Plugins -->
		<script src="plugins/datatables/jquery.dataTables.min.js"></script>
		<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
		<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
		<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
		<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
		<script src="plugins/jszip/jszip.min.js"></script>
		<script src="plugins/pdfmake/pdfmake.min.js"></script>
		<script src="plugins/pdfmake/vfs_fonts.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
		<!-- AdminLTE App -->
		<script src="js/adminlte.min.js"></script>
		<!-- AdminLTE for demo purposes -->
		<script src="js/demo.js"></script>
		<!-- Page specific script -->
		`
		$(function () {
			$("#example1").DataTable({
			  "responsive": true, "lengthChange": false, "autoWidth": false,
			  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
			}).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
			$('#example2').DataTable({
			  "paging": true,
			  "lengthChange": false,
			  "searching": false,
			  "ordering": true,
			  "info": true,
			  "autoWidth": false,
			  "responsive": true,
			});
		  });
	  }).catch(err=>{
		console.error(err);
	  })
  }

  function getListJenisPengguna(){
	// tittle.innerHTML="Kelasmen Sementara Liga Primer Inggris";
	fetch(JenisPenggunaUrl)
	  .then(response => response.json())
	  .then(resJson=>{
		console.log(resJson.data);
		let data = "";
		let i = 1;
		resJson.data.forEach(jnspgn=>{
		  data += `
			<tr>
			  <td>${i++}.</td>
			  <td>${jnspgn.jenis_pengguna}</td>
			  <td>${jnspgn.hak_akses}</td>
			</tr>
		   `
		});
		contents.innerHTML = `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- Ionicons -->
		<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
		<!-- Tempusdominus Bootstrap 4 -->
		<link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
		<!-- iCheck -->
		<link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
		<!-- JQVMap -->
		<link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
		<!-- Theme style -->
		<link rel="stylesheet" href="css/adminlte.min.css">
		<!-- overlayScrollbars -->
		<link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
		<!-- Daterange picker -->
		<link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
		<!-- summernote -->
		<link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
		<!-- DataTables -->
		<link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
		<link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

		<div class="content-wrapper">
		<section class="content-header">
		<div class="container">
			<div class="row lg-9">
			<div class="col-lg-6">
				<h1>Data Prodi</h1>
			</div>
			</div>
		</div><!-- /.container-fluid -->
		</section>
		<section class="content">
		  <div class="container">
			<div class="row">
			  <div class="col-12">
				<div class="card">
				  <div class="card-header">
					<h3 class="card-title">Data yang menampilkan isi dari berbagai jurusan yang ada di ITN Malang</h3>
				  </div>
				<div class="card">
				  <!-- /.card-header -->
				  <div class="card-body">
					<table id="example1" class="table table-bordered table-striped">
					  <thead>
					  <tr>
						<th>NOMOR</th>
						<th>JENIS PENGGUNA</th>
						<th>HAK AKSES</th>
					  </tr>
					  </thead>
					  <tbody>
					   ${data}
					  </tbody>
					  <tfoot>
					  <tr>
						<th>NOMOR</th>
						<th>JENIS PENGGUNA</th>
						<th>HAK AKSES</th>
					  </tr>
					  </tfoot>
					</table>
				  </div>
				  <!-- /.card-body -->
				</div>
				<!-- /.card -->
			  </div>
			  <!-- /.col -->
			</div>
			<!-- /.row -->
		  </div>
		  <!-- /.container-fluid -->
		</section>
		</div>

		<!-- jQuery -->
		<script src="plugins/jquery/jquery.min.js"></script>
		<!-- Bootstrap 4 -->
		<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
		<!-- DataTables  & Plugins -->
		<script src="plugins/datatables/jquery.dataTables.min.js"></script>
		<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
		<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
		<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
		<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
		<script src="plugins/jszip/jszip.min.js"></script>
		<script src="plugins/pdfmake/pdfmake.min.js"></script>
		<script src="plugins/pdfmake/vfs_fonts.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
		<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
		<!-- AdminLTE App -->
		<script src="js/adminlte.min.js"></script>
		<!-- AdminLTE for demo purposes -->
		<script src="js/demo.js"></script>
		<!-- Page specific script -->
		`
		$(function () {
			$("#example1").DataTable({
			  "responsive": true, "lengthChange": false, "autoWidth": false,
			  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
			}).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
			$('#example2').DataTable({
			  "paging": true,
			  "lengthChange": false,
			  "searching": false,
			  "ordering": true,
			  "info": true,
			  "autoWidth": false,
			  "responsive": true,
			});
		  });
	  }).catch(err=>{
		console.error(err);
	  })
  }

function loadPage(page){
	switch(page){
		case "Prodi":
			getListProdi();
			break;
		case "JenisPembayaran":
			getListJenisPembayaran();
			break;
		case "JenisPengguna":
			getListJenisPengguna();
			break;
	}
}

document.addEventListener('DOMContentLoaded', function (){
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);
	// getListProdi();

	document.querySelectorAll(".sidenav a, .topnav a").forEach(elm=>{
		elm.addEventListener("click", evt=>{
			let sideNav = document.querySelector(".sidenav");
			M.Sidenav.getInstance(sideNav).close();
			page = evt.target.getAttribute("href").substr(1);
			loadPage(page);
		})
	})

	var page = window.location.hash.substr(1);
	if (page === "" || page === "!" ) page = "prodi";

	var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

	loadPage(page); 
});