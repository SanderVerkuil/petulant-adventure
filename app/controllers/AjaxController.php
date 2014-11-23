<?php

class AjaxController extends BaseController {

	public function getMovies($query = "")
	{
		$q = Input::get("query");

		$q = preg_replace("/ \(.*\)/", "", $q);

		$test = $this->apiRequest('search/multi', array("query" => $q));

		$suggestions = array();

		Debugbar::log($test);

		foreach($test["results"] as $result)
		{
			if ($result["media_type"] == "tv")
				$name = $result["original_name"];
			else if ($result["media_type"] == "movie")
				$name = $result["original_title"];

			$result["name"] = $name;

			$current = array(
				"value" => $name . " ({$result['media_type']}) ({$result['id']})",
				"data" => $result
			);
			$suggestions[] = $current;
		}

		return Response::json(array("query" => $q, "suggestions" => $suggestions));
	}

	function apiRequest($method, $params = array())
	{
		$service_url = "http://api.themoviedb.org/3/";
		$params["api_key"] = Config::get("tmdb.api");

		$url = $service_url . $method . "?" . http_build_query($params);
		return json_decode(file_get_contents($url), true);
	}

	function getImage($size = "w342", $image = "")
	{
		if ($image == "")
			return Response::make(file_get_contents("http://placehold.it/154x231&text=" . urlencode(Input::get("name"))), 200, ["content-type" => "image/jpg"]);
		return Response::make(file_get_contents("http://image.tmdb.org/t/p/$size/$image"), 200, ["content-type" => "image/jpg"]);
	}

	public function getConfig()
	{
		return Response::json($this->apiRequest("configuration"));
	}

	public function getActors($id = "")
	{
		Debugbar::log(Input::get("type"));
		$data = $this->apiRequest(Input::get('type') . "/$id/credits");

		return Response::json($data);
	}

	public function missingMethod($parameters = array())
	{
		// Couldn't find method;
	}
}
