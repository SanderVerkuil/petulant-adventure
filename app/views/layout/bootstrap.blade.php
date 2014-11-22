@extends('layout.basic')

@section('header')
	{{Bootstrap::css()}}
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
	{{Bootstrap::js()}}
@endsection