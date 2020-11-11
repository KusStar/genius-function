# genius-function

> A function wraps the genius.com API.

## Usage

BaseURL:  https://genius-function.vercel.app/api

### /artists

Example: https://genius-function.vercel.app/api/artists?id=1985

**id**

ID of the artist

**format**

Format for text bodies related to the document, One or more of `dom`, `plain`, and `html`, separated by `commas`, defaults to `plain`

### /referents

Example: https://genius-function.vercel.app/api/referents?id=2842074

**id**

ID of the referent, only support song_id

**format**

Format for text bodies related to the document, One or more of `dom`, `plain`, and `html`, separated by `commas`, defaults to `plain`

**per_page**

Number of results, defaults to `10`

**page**

Paginated offset, defaults to `1`

### /search

Example: https://genius-function.vercel.app/api/search?q=frank%20ocean

**q**

The term to search for

### /songs

Example: https://genius-function.vercel.app/api/songs?id=2842074

**id**

ID of the song

**format**

Format for text bodies related to the document, One or more of `dom`, `plain`, and `html`, separated by `commas`, defaults to `plain`

## Deploy

1. Get your Genius CLIENT ACCESS TOKEN from [Genius](https://genius.com/api-clients)

2. Clone, deploy the project
  ```
  > git clone https://github.com/KusStar/genius-function
  > cd genius-function
  > yarn deploy
  vercel --prod
  ```

3. Set up the `ACCESS_TOKEN` to the [Environment Variables](https://vercel.com/docs/build-step#environment-variables) of your project settings

## Thanks

- [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions)

- [axios](https://github.com/axios/axios)

- [Genius API](https://genius.com/developers)

## License

[MIT](LICENSE)
