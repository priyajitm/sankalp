import { useState, useEffect } from 'react'
import apiService from '../services/api'

export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await apiCall()
        setData(result)
      } catch (err) {
        setError(err)
        console.error('API call failed:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, dependencies)

  return { data, loading, error }
}

// Specific hooks for each page
export const useHomeContent = () => {
  return useApi(() => apiService.fetchHomeContent())
}

export const useAboutContent = () => {
  return useApi(() => apiService.fetchAboutContent())
}

export const useAdmissionContent = () => {
  return useApi(() => apiService.fetchAdmissionContent())
}

export const useSpecialCurriculumContent = () => {
  return useApi(() => apiService.fetchSpecialCurriculumContent())
}

export const useGalleryContent = () => {
  return useApi(() => apiService.fetchGalleryContent())
}

export const useStudentCornerContent = () => {
  return useApi(() => apiService.fetchStudentCornerContent())
}

export const useContactContent = () => {
  return useApi(() => apiService.fetchContactContent())
}

// Hook for form submissions
export const useFormSubmission = () => {
  const [submitting, setSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  const submitForm = async (submitFunction, formData) => {
    try {
      setSubmitting(true)
      setSubmitResult(null)
      const result = await submitFunction(formData)
      setSubmitResult(result)
      return result
    } catch (err) {
      console.error('Form submission failed:', err)
      const errorResult = { 
        success: false, 
        message: 'An error occurred while submitting the form. Please try again.' 
      }
      setSubmitResult(errorResult)
      return errorResult
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, submitResult, submitForm }
} 