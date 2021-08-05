# Firebase Firestore Text Search and Pagination fork for address index

The original source code is referenced in this post [Medium](https://medium.com/@ken11zer01/firebase-firestore-text-search-and-pagination-91a0df8131ef).

This fork has changed the generation of the indexing array to be optimized for 4 word fields.
The reason for 4 words is that I have a field that typically has 4 words , and it is the field I want to search.


## Install


Create ```.firebaserc``` file, then set default to your projectId. 
```json
{
  "projects": {
    "default": "projectId"
  }
}
```

Install firebase-tools then run application.
```bash
> npm install -g firebase-tools
> firebase serve
```

