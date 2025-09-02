// Подключение Supabase
const { createClient } = supabase;
const supabaseUrl = "https://rjqeqffegmejiyakhxza.supabase.co"; // заменяй
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcWVxZmZlZ21laml5YWtoeHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTA2MzcsImV4cCI6MjA3MjM4NjYzN30.KuXUp9tCXmnlCMv3go89E8O_oHOvurErUkcst8UUEGc"; // из Settings → API → Project API keys
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Функция загрузки услуг
async function loadServices() {
  const { data, error } = await supabaseClient
    .from("services")
    .select("*");

  if (error) {
    console.error("Ошибка загрузки:", error);
    return;
  }

  console.log("Загружено из БД:", data);

  const container = document.querySelector(".services-grid");
  container.innerHTML = "";

  data.forEach(service => {
    container.innerHTML += `
      <div class="service cyber-card">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3"/>
        </svg>
        <div>
          <div>${service.title}</div>
          <small class="muted">${service.description}</small>
        </div>
        <div class="price">${service.price} ₴</div>
      </div>
    `;
  });
}

// Запускаем загрузку при старте
document.addEventListener("DOMContentLoaded", loadServices);
