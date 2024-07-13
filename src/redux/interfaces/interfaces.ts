export interface DataInitialState {
    posts: Post[] | [],
    todos: Todo[] | [],
    albums: Album[] | [],
    comments: Comment[] | [],
}
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface Album {
    userId: number,
    id: number,
    title: string,
}
export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

// rick & morty

export interface Character {
    id: 1,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    created: string,
    episode: string[]
    origin: LocationAndOrigin,
    location: LocationAndOrigin,
    image: string,
    url: string
}
export interface LocationAndOrigin {
    name: string,
    url: string
}
export interface Info {
    "count": number,
    "pages": number,
    "next": string,
    "prev": null | string
}
export interface RickInitialState {
    info: Info | {},
    results: Character[]
}
export interface Characters {
    info: Info,
    results: Character[]
}

const rickInitialState: RickInitialState = {
    info: {},
    results: [],
}