import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  name?: string
  createdAt: string
  updatedAt: string
}

interface UserState {
  users: User[]
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('users', {
  state: (): UserState => ({
    users: [],
    loading: false,
    error: null
  }),

  getters: {
    getUserById: (state) => (id: number) => {
      return state.users.find(user => user.id === id)
    },
    usersWithNames: (state) => {
      return state.users.filter(user => user.name).length
    },
    usersWithoutNames: (state) => {
      return state.users.filter(user => !user.name).length
    }
  },

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      
      try {
        const response = await $fetch('http://localhost:3001/api/users')
        this.users = response
      } catch (error) {
        this.error = 'Failed to fetch users'
        console.error('Error fetching users:', error)
      } finally {
        this.loading = false
      }
    },

    async createUser(userData: { email: string; name?: string }) {
      this.loading = true
      this.error = null
      
      try {
        const newUser = await $fetch('http://localhost:3001/api/users', {
          method: 'POST',
          body: userData
        })
        this.users.unshift(newUser)
        return newUser
      } catch (error) {
        this.error = 'Failed to create user'
        console.error('Error creating user:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteUser(id: number) {
      this.loading = true
      this.error = null
      
      try {
        await $fetch(`http://localhost:3001/api/users/${id}`, {
          method: 'DELETE'
        })
        this.users = this.users.filter(user => user.id !== id)
      } catch (error) {
        this.error = 'Failed to delete user'
        console.error('Error deleting user:', error)
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 