import axios from 'axios'

export const authAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Token':
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjJlNTY5YTBhODE1Y2Q1MzU1MjllZmY2ZjhiMjZjZTRiZThlYjEzYWY2MDJkNGNiOTk5YWMxOTczODRiZWFmNWIwNjIyNzg3NjRkMDM3N2MiLCJpYXQiOjE2OTQ2MDExNzUsIm5iZiI6MTY5NDYwMTE3NSwiZXhwIjoxNzI2MjIzNTc1LCJzdWIiOiI1MTkiLCJzY29wZXMiOltdfQ.RNBFPtckB57t7C0EMvnVqst-dYjGFYD7RmJ1VjrHkjnhqRECPEdk267gvFpXG63cdBQOb9fO9iGS3hwnQyLSeztp8Tu3oBmTXNweaftWLUbGHX8GpcYDVzfpKPfLGfXQAadCMdoGWaBTiwMbrtv4RaKyjzPsVGGeuztEYVKEoWkPd8JUwrWpiN-ElZvgVrEyZ_Pn4d_LM8rbURuAN-6myI3vfjTkIkzD0drI_R-YkMQplIGUUCnJ4_5AZL0xrDwF__SOYKe3MCg0CCh1GoVNr0cV7xN6-uIBts1uf0gGTgVn2wcOqWE3fZp2xcFKzdsR6MLEZvPlG9GOzZCcfjyYwlWxFmFS_2xwKmrdpQhGZdhIAvKWq1kLoF-VnTXMpp8TOnHCHwMynigz8t_nONvcZ1vuGIdM_HIRzDppXP_9bQTSZCF4NhusttpUKrLozY-nfxrn3SB6RTSLYc-0K3Rw-0IQTlU_iOe_8ea-4RYp9GDMnJiGQ-EhsVpRW8SZyLVjmj51TeQjg74N7szEW3hw4u7wQjYuF8I2o7Q-RaoN1kiSpu-MyQCGxdcdAd3lt1l6uQWW6EMP0TFOfFmg6iYyoeYzrNKxa6AP8SgdUUAslMinbOwZ3_UPEgmK77YnFb5w9z8nFZgAbP-EvGwkDVcpDx3mBAcqyusBzPA8tbQeyOA',
  },
})

export const publicAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

authAxios.interceptors.request.use(
  async (config) => {
    return config
  },
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  (error) => {
    return Promise.reject(error)
  },
)
