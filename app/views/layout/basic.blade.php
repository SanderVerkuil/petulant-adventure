<!doctype html>
<html lang="en">
	<head>
		<title>@yield('title', 'Petulant Adventure')</title>

		@section('header')
		@show

		<!-- Start of custom css -->
		@yield('customcss', '<!-- No css loaded -->')
		<!-- End of custom css -->
	</head>
	<body>
		@yield('body', 'Place the body here. :D')

		<!-- Start of the javascripts -->
		@yield('javascripts', '<!-- No javascripts loaded -->')
		<!-- End of the javascripts -->
	</body>
</html>