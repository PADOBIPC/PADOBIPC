// Подключение к Supabase
const SUPABASE_URL = "https://rjqeqffegmejiyakhxza.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcWVxZmZlZ21laml5YWtoeHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTA2MzcsImV4cCI6MjA3MjM4NjYzN30.KuXUp9tCXmnlCMv3go89E8O_oHOvurErUkcst8UUEGc"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

<script>
async function registerUser() {
  const username = document.getElementById("username").value.trim()
  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value.trim()
  const phone_number = document.getElementById("phone_number").value.trim()

  if (!username || !email || !password) {
    alert("Заполните все обязательные поля!")
    return
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Введите корректный email!")
    return
  }

  if (password.length < 6) {
    alert("Пароль должен быть не менее 6 символов")
    return
  }

  // Сохраняем в базу Supabase
  const { data, error } = await supabase
    .from("users")
    .insert([{ username, email, password, phone_number }])

  if (error) {
    console.error(error)
    alert("Ошибка: " + error.message)
  } else {
    alert("Регистрация успешна!")
    closeAuth()
    window.location.href = "profile.html"
  }
}
</script>
