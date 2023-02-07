
const generatePost = () => {
  const url = 'https://thefluent.me/generate-post'
  const options = {
    method: 'POST',
    body: '{"post_title":"What does environment mean?","ai_model":"advanced_01","post_min_length":"199","post_max_length":"500"}'
  }
  return fetch(url, options)
}

export default generatePost
