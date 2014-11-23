@extends('layout.basic')

@section('header')
	{{ HTML::style("assets/stylesheets/frontend.css") }}
	<link rel="stylesheet" type="text/css" href="https://www.gstatic.com/freebase/suggest/4_2/suggest.min.css" />
@stop

@section('body')
	@include('snippets.navbar')

	<div class='container'>
	@section('content')
		No content has been placed yet
	@show
	</div>
@stop

@section('javascripts')
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	{{ HTML::script("assets/javascript/frontend.js") }}
@endsection