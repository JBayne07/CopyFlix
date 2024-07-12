package main 

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strings"
	"encoding/json"
	"strconv"
)

var movies []Movie = []Movie{{Id: 101, Title: "Test Movie 01", ReleaseYr: "1999", Src:"https://via.placeholder.com/210?text=1"}, 
							 {Id: 102, Title: "Test Movie 02", ReleaseYr: "2000", Src:"https://via.placeholder.com/210?text=2"},
							 {Id: 103, Title: "Test Movie 03", ReleaseYr: "2001", Src:"https://via.placeholder.com/210?text=3"},
							 {Id: 104, Title: "Test Movie 04", ReleaseYr: "2002", Src:"https://via.placeholder.com/210?text=4"},
							 {Id: 105, Title: "Test Movie 05", ReleaseYr: "2003", Src:"https://via.placeholder.com/210?text=5"},
							 {Id: 106, Title: "Test Movie 06", ReleaseYr: "2004", Src:"https://via.placeholder.com/210?text=6"},
							 {Id: 107, Title: "Test Movie 07", ReleaseYr: "2005", Src:"https://via.placeholder.com/210?text=7"},
							 {Id: 108, Title: "Test Movie 08", ReleaseYr: "2006", Src:"https://via.placeholder.com/210?text=8"},
							 {Id: 109, Title: "Test Movie 09", ReleaseYr: "2007", Src:"https://via.placeholder.com/210?text=9"},
							 {Id: 110, Title: "Test Movie 10", ReleaseYr: "2008", Src:"https://via.placeholder.com/210?text=10"},
							 {Id: 111, Title: "Test Movie 11", ReleaseYr: "2009", Src:"https://via.placeholder.com/210?text=11"},
							 {Id: 112, Title: "Test Movie 12", ReleaseYr: "2010", Src:"https://via.placeholder.com/210?text=12"},
							 {Id: 113, Title: "Test Movie 13", ReleaseYr: "2011", Src:"https://via.placeholder.com/210?text=13"},
							 {Id: 114, Title: "Test Movie 14", ReleaseYr: "2012", Src:"https://via.placeholder.com/210?text=14"},
							 {Id: 115, Title: "Test Movie 15", ReleaseYr: "2013", Src:"https://via.placeholder.com/210?text=15"},
							 {Id: 116, Title: "Test Movie 16", ReleaseYr: "2014", Src:"https://via.placeholder.com/210?text=16"},
							 {Id: 117, Title: "Test Movie 17", ReleaseYr: "2015", Src:"https://via.placeholder.com/210?text=17"},
							 {Id: 118, Title: "Test Movie 18", ReleaseYr: "2016", Src:"https://via.placeholder.com/210?text=18"},
							 {Id: 119, Title: "Test Movie 19", ReleaseYr: "2017", Src:"https://via.placeholder.com/210?text=19"},
							 {Id: 120, Title: "Test Movie 20", ReleaseYr: "2018", Src:"https://via.placeholder.com/210?text=20"},
							}
var users []User = []User{{Id: 1, Permission: "User", Username: "TestUser1", Password: "Password1"}, {Id: 2, Permission: "Admin", Username: "TestUser2", Password: "Password2"}}
var reviews []Review = []Review{{Id: 1, Score: 7, Description: "Test Description 1", MovieId: 1, UserId: 1}, {Id: 2, Score: 8, Description: "Test Description 2", MovieId: 1, UserId: 2}}

// Structure for Movie objects in the database
type Movie struct {
	Id int
	Title string
	Genres []string
	Keywords []string
	ReleaseYr string
	Src string
}

// Structure for User objects in the database
type User struct {
	Id int
	Permission string
	Username string
	Password string
}

// Structure for the Review objects in the database
type Review struct {
	Id int
	Score int
	Description string
	MovieId int
	UserId int
}

// Structure for the routes in the backend
type Route struct{
	method string
	regex *regexp.Regexp
	handler http.HandlerFunc
}

type ctxKey struct{}

func newRoute(method string, path string, handler http.HandlerFunc) Route {
	return Route{method, regexp.MustCompile("^" + path + "$"), handler}
}

// API paths
var routes = []Route{
	newRoute("GET", "/movies", getMovies),
	newRoute("POST", "/movies", createMovie),
	newRoute("GET", "/movies/([^/]+)", getMovie),
	newRoute("GET", "/movies/([^/]+)/reviews", getReviews),
	newRoute("POST", "/movies/([^/]+)/reviews", createReview),
	newRoute("GET", "/users/([^/]+)", getUser),
	newRoute("POST", "/users", createUser),
}

func enableCors(w *http.ResponseWriter){
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(*w).Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
}

func checkPreFlight(w http.ResponseWriter, r *http.Request) bool{
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return true
	}else{
		return false
	}
}

func serve(w http.ResponseWriter, r *http.Request){
	enableCors(&w)
	if(checkPreFlight(w, r)){
		return
	}
	var allow []string
	for i := 0; i < len(routes); i++ {
		matches := routes[i].regex.FindStringSubmatch(r.URL.Path)
		if (len(matches) > 0) {
			if r.Method != routes[i].method {
				allow = append(allow, routes[i].method)
				continue
			}
			ctx := context.WithValue(r.Context(), ctxKey{}, matches[1:])
			routes[i].handler(w, r.WithContext(ctx))
			return
		}
	}

	if (len(allow) > 0) {
		w.Header().Set("Allow", strings.Join(allow, ", "))
		http.Error(w, "405 method not allowed", http.StatusMethodNotAllowed)
		return
	}

	http.NotFound(w, r)
}

func getMovies(w http.ResponseWriter, r *http.Request){
	data, err := json.Marshal(&movies)
	if (err != nil) {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(w, err)
	}else{
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintln(w, string(data))
	}

}

func getMovie(w http.ResponseWriter, r *http.Request){
	id, err := strconv.Atoi(r.Context().Value(ctxKey{}).([]string)[0])

	if (err != nil) {
		fmt.Println(err)
	}

	for _, movie := range movies {

		if (movie.Id == id) {
			data, err := json.Marshal(movie)
			if (err != nil) {
				w.WriteHeader(http.StatusInternalServerError)
				fmt.Println(w, err)
			}else{
				w.WriteHeader(http.StatusOK)
				fmt.Fprintln(w, string(data))
			}
			return
		}
	}
}

func createMovie(w http.ResponseWriter, r *http.Request){
	var movie Movie
	query := r.URL.Query()
	movie.Id = movies[len(movies)-1].Id + 1
	movie.Title = string(query.Get("Title"))
	movie.ReleaseYr = string(query.Get("ReleaseYr"))
	
	movies = append(movies, movie)
	data, err := json.Marshal(movies)
	if (err != nil ){
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(w, err)
	}else{
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, string(data))
	}
}

func getUser(w http.ResponseWriter, r *http.Request){
	id, err := strconv.Atoi(r.Context().Value(ctxKey{}).([]string)[0])

	if (err != nil) {
		fmt.Println(err)
	}

	for _, user := range users {

		if (user.Id == id) {
			data, err := json.Marshal(user)
			if (err != nil) {
				w.WriteHeader(http.StatusInternalServerError)
				fmt.Println(w, err)
			}else{
				w.WriteHeader(http.StatusOK)
				fmt.Fprintln(w, string(data))
			}
		}
	}
}

func createUser(w http.ResponseWriter, r *http.Request){
	var user User
	query := r.URL.Query()

	user.Id = users[len(users)-1].Id + 1
	user.Username = string(query.Get("Username"))
	user.Password = string(query.Get("Password"))

	if (string(query.Get("Permission")) != "") {
		user.Permission = string(query.Get("Permission"))
	}

	users = append(users, user)

	data, err := json.Marshal(user)

	if (err != nil) {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, err)
	}else{
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, string(data))
	}
}

func getReviews(w http.ResponseWriter, r *http.Request){
	id, err := strconv.Atoi(r.Context().Value(ctxKey{}).([]string)[0])
	
	if (err != nil) {
		fmt.Println(err)
	}

	var movieReviews []Review
	for _,review := range reviews{
		if(review.MovieId == id){
			movieReviews = append(movieReviews, review)
		}
	}

	data, err := json.Marshal(movieReviews)

	if(err != nil){
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, err)
	}else{
		w.WriteHeader(http.StatusAccepted)
		fmt.Fprintln(w, string(data))
	}
}

func createReview(w http.ResponseWriter, r *http.Request){
	id, err := strconv.Atoi(r.Context().Value(ctxKey{}).([]string)[0])
	query := r.URL.Query()

	if (err != nil) {
		fmt.Println(err)
	}

	var review Review

	review.Id = reviews[len(reviews) - 1 ].Id + 1
	review.MovieId = id
	score, _ := strconv.Atoi(query.Get("Score"))
	review.Score = score
	review.Description = string(query.Get("Description"))
	userId, _ := strconv.Atoi(query.Get("UserId"))
	review.UserId = userId
	
	reviews = append(reviews, review)

	data, err := json.Marshal(review)

	if(err != nil){
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, err)
	}else{
		w.WriteHeader(http.StatusAccepted)
		fmt.Fprintln(w, string(data))
	}
}

func main() {
	r := http.HandlerFunc(serve)

	fmt.Println("Starting server at http://localhost:8000")

	if err := http.ListenAndServe("localhost:8000", r); err != nil {
        log.Fatal(err)
    }
}

