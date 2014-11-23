@extends('layout.bootstrap')

@section('content')
	<div class="form-group">
		<label for="movietitle">Movie title</label>
		<div class="input-group">
			<input type="text" class="form-control" id="movietitle" placeholder="Enter name of movie">
			<span class="input-group-btn">
				<button class="btn btn-primary" id="addButton" type="button">Add movie</button>
			</span>
		</div>
	</div>
	<div id="movies-results">
	</div>
@stop