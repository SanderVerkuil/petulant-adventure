@extends('layout.basic')

@section('header')
	{{ HTML::style("assets/stylesheets/frontend.css") }}
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
	{{ HTML::script("assets/javascript/frontend.js") }}
@endsection