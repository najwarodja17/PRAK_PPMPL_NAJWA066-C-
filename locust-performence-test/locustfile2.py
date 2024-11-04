from locust import HttpUser, task, between
import random

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request selanjutnya

    @task
    def get_users(self):
        """Menguji endpoint untuk mendapatkan semua pengguna."""
        self.client.get("/users")

    @task
    def get_user_by_id(self):
        """Menguji endpoint untuk mendapatkan detail pengguna berdasarkan ID."""
        user_id = random.randint(1, 10)  # Ubah sesuai rentang ID yang tersedia
        self.client.get(f"/users/{user_id}")

    @task
    def create_user(self):
        """Menguji endpoint untuk membuat pengguna baru."""
        user_data = {
            "name": "Test User",
            "username": "testuser",
            "email": "testuser@example.com"
        }
        self.client.post("/users", json=user_data)

    @task
    def update_user(self):
        """Menguji endpoint untuk memperbarui data pengguna yang ada."""
        user_id = random.randint(1, 10)
        updated_data = {
            "name": "Updated User",
            "username": "updateduser",
            "email": "updateduser@example.com"
        }
        self.client.put(f"/users/{user_id}", json=updated_data)

    @task
    def delete_user(self):
        """Menguji endpoint untuk menghapus pengguna berdasarkan ID."""
        user_id = random.randint(1, 10)
        self.client.delete(f"/users/{user_id}")
