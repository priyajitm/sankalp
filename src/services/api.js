import axios from 'axios'

const API_BASE_URL = '/data' // For development, later change to actual API URL

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  // For development: fetch from JSON file
  async fetchContent() {
    try {
      const response = await this.client.get('/content.json')
      return response.data
    } catch (error) {
      console.error('Error fetching content:', error)
      throw error
    }
  }

  // Future API methods - ready for when switching to real API
  async fetchPageContent(page) {
    try {
      const content = await this.fetchContent()
      return content[page] || null
    } catch (error) {
      console.error(`Error fetching ${page} content:`, error)
      throw error
    }
  }

  async fetchHomeContent() {
    return this.fetchPageContent('home')
  }

  async fetchAboutContent() {
    return this.fetchPageContent('about')
  }

  async fetchAdmissionContent() {
    return this.fetchPageContent('admission')
  }

  async fetchSpecialCurriculumContent() {
    return this.fetchPageContent('specialCurriculum')
  }

  async fetchGalleryContent() {
    return this.fetchPageContent('gallery')
  }

  async fetchStudentCornerContent() {
    return this.fetchPageContent('studentCorner')
  }

  async fetchContactContent() {
    return this.fetchPageContent('contact')
  }

  // Future methods for when connected to real API
  async submitContactForm(formData) {
    try {
      // For now, just log the form data
      console.log('Contact form submitted:', formData)
      return { success: true, message: 'Thank you for your message. We will get back to you soon!' }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }
  }

  async submitAdmissionForm(formData) {
    try {
      // For now, just log the form data
      console.log('Admission form submitted:', formData)
      return { success: true, message: 'Admission form submitted successfully!' }
    } catch (error) {
      console.error('Error submitting admission form:', error)
      throw error
    }
  }
}

export default new ApiService() 