@extends('layout.bootstrap')

@section('content')
	<div class="row">
	<div class="form-group">
		<label for="movietitle">Movie title</label>
		<div class="input-group">
			<input type="text" class="form-control" id="movietitle" placeholder="Enter name of movie">
			<span class="input-group-btn">
				<button class="btn btn-primary disabled" id="addButton" type="button">Add movie</button>
			</span>
		</div>
	</div>
	<div class="form-group">
		<button class="btn btn-lg btn-primary btn-block disabled" onclick="DoMagic();" id="magic">Find the common actors between the movies</button>
	</div>
	</div>
	<div class="row">
	<div id="movies-results">
	</div>
	</div>
	<div class="row">
	<div id="actors-results">
	<div class="card">
            8358
            Cast: 
            <ul>
                <li><img class="profile" src="ajax/image/w45/r4jtlboNqWPz2dOHafrPJE4Yd94.jpg"><span class="name">Tim Roth</span></li>
                <li><img class="profile" src="ajax/image/w45/i3vsRl4xhsBCoixaiOHPqwGQ65L.jpg"><span class="name">Kelli Williams</span></li>
                <li><img class="profile" src="ajax/image/w45/aV1y3XO96RztqsL8wZYBDsH8lBI.jpg"><span class="name">Brendan Hines</span></li>
                <li><img class="profile" src="ajax/image/w45/m7PKCycRo7Waf3elIJqEfEsUIxZ.jpg"><span class="name">Hayley McFarland</span></li>
                <li><img class="profile" src="ajax/image/w45/uYa9mUAh3YeFlACaY0rI0Oz7pRf.jpg"><span class="name">Jennifer Beals</span></li>
                <li><img class="profile" src="ajax/image/w45/bbqP14ukes1Ya9tPTOHqw9XEPRY.jpg"><span class="name">Monica Raymund</span></li>
            </ul>
            Crew: 
            <ul>
                <li><img class="profile" src="ajax/image/w45/jEar20rOczc6ve2jy8zYxiBkPw5.jpg"><span class="name">Brian Grazer</span></li>
                <li><span class="name">David Nevins</span></li>
                <li><span class="name">Imagine Entertainment</span></li>
                <li><span class="name">Sam Baum</span></li>
        </ul></div>
	</div>
	</div>
@stop