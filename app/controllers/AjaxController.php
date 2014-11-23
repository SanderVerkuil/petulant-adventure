<?php

class AjaxController extends BaseController {

	public function getMovies($query = "")
	{
		$q = Input::get("query");
		$test = $this->apiRequest('search/movie', array("search_type" => "ngram", "query" => $q));

		$suggestions = array();

		foreach($test["results"] as $result)
		{
			$current = array(
				"value" => $result["original_title"],
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
		return Response::make(file_get_contents("http://image.tmdb.org/t/p/$size/$image"), 200, ["content-type" => "image/jpg"]);
	}

	public function getConfig()
	{
		return Response::json($this->apiRequest("configuration"));
	}

	public function getActors($id = "")
	{
		$data = $this->apiRequest("movie/$id/credits");

		echo "<pre>";
		print_r($data);
		echo "</pre>";
	}

	public function missingMethod($parameters = array())
	{
		// Couldn't find method;
	}
}
