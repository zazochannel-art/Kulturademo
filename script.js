const dictionaries = {
  ro: {
    brand_subtitle: "Organizare interna",
    admin_label: "Admin panel",
    login_eyebrow: "Acces echipa",
    login_title: "Logare in panoul organizatorilor",
    login_subtitle: "Gestioneaza evenimente, task-uri, membri si resurse dintr-un singur loc.",
    email_label: "Email",
    password_label: "Parola",
    login_hint: "Demo: admin@autocrew.md / admin123",
    login_button: "Intra in admin panel",
    login_error: "Email sau parola incorecta.",
    nav_dashboard: "Dashboard",
    nav_events: "Evenimente",
    nav_tasks: "Checklist",
    nav_team: "Echipa",
    nav_settings: "Setari",
    logout: "Iesire",
    eyebrow: "Panou intern pentru organizatori",
    page_title: "Centrul de comanda al evenimentelor auto",
    language_label: "Limba",
    new_event: "Eveniment nou",
    metric_events: "Evenimente active",
    metric_events_note: "2 in pregatire intensiva",
    metric_tasks: "Task-uri deschise",
    metric_tasks_note: "7 au termen saptamana aceasta",
    metric_team: "Membri implicati",
    metric_team_note: "5 roluri operationale",
    metric_risks: "Blocaje",
    metric_risks_note: "Necesita decizie rapida",
    events_title: "Evenimente in lucru",
    events_subtitle: "Status, responsabil si progres pentru fiecare eveniment.",
    view_all: "Vezi tot",
    priority_title: "Prioritati azi",
    responsible: "Responsabil",
    ready: "Aproape gata",
    risk: "Cu risc",
    edit: "Editeaza",
    events_admin_title: "Administrare evenimente",
    events_admin_subtitle: "Lista pentru creare, editare si urmarire.",
    add_event: "Adauga eveniment",
    tasks_admin_title: "Checklist operational",
    tasks_admin_subtitle: "Task-uri, responsabili si prioritate.",
    add_task: "Adauga task",
    team_admin_title: "Membrii echipei",
    team_admin_subtitle: "Roluri, acces si responsabilitati.",
    add_member: "Adauga membru",
    settings_access: "Acces si roluri",
    settings_access_text: "Activeaza roluri pentru coordonator, logistica, media si securitate.",
    setting_login: "Login obligatoriu",
    setting_roles: "Roluri pentru membri",
    settings_lang: "Limbi",
    settings_lang_text: "Interfata este pregatita pentru romana, rusa si engleza.",
    views: {
      dashboard: "Centrul de comanda al evenimentelor auto",
      events: "Administrare evenimente",
      tasks: "Checklist operational",
      team: "Administrare echipa",
      settings: "Setari admin",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistica", "Victor", "Aproape gata", 82],
      ["Track Day Summer", "Autodrom", "Pista si securitate", "Ana", "In lucru", 58],
      ["Retro Auto Picnic", "Parcul Valea Morilor", "Expozitie", "Mihai", "Cu risc", 43],
    ],
    tasks: [
      ["Confirmare securitate si ambulanta", "Ana", "Urgent"],
      ["Plan acces staff si invitati", "Victor", "Urgent"],
      ["Lista echipamente media", "Irina", "Mediu"],
      ["Verificare autorizatii locatie", "Mihai", "Mediu"],
    ],
    team: [
      ["Victor", "Coordonator logistica", "Admin"],
      ["Ana", "Securitate si pista", "Editor"],
      ["Irina", "Media si comunicare", "Editor"],
      ["Mihai", "Parteneri si autorizatii", "Viewer"],
    ],
  },
  ru: {
    brand_subtitle: "Внутренняя организация",
    admin_label: "Панель администратора",
    login_eyebrow: "Доступ команды",
    login_title: "Вход в панель организаторов",
    login_subtitle: "Управляйте событиями, задачами, командой и ресурсами в одном месте.",
    email_label: "Email",
    password_label: "Пароль",
    login_hint: "Демо: admin@autocrew.md / admin123",
    login_button: "Войти в админ панель",
    login_error: "Неверный email или пароль.",
    nav_dashboard: "Панель",
    nav_events: "События",
    nav_tasks: "Чеклист",
    nav_team: "Команда",
    nav_settings: "Настройки",
    logout: "Выход",
    eyebrow: "Внутренняя панель организаторов",
    page_title: "Центр управления авто событиями",
    language_label: "Язык",
    new_event: "Новое событие",
    metric_events: "Активные события",
    metric_events_note: "2 в активной подготовке",
    metric_tasks: "Открытые задачи",
    metric_tasks_note: "7 со сроком на этой неделе",
    metric_team: "Участники команды",
    metric_team_note: "5 операционных ролей",
    metric_risks: "Блокеры",
    metric_risks_note: "Нужно быстрое решение",
    events_title: "События в работе",
    events_subtitle: "Статус, ответственный и прогресс по каждому событию.",
    view_all: "Все",
    priority_title: "Приоритеты сегодня",
    responsible: "Ответственный",
    ready: "Почти готово",
    risk: "Есть риск",
    edit: "Изменить",
    events_admin_title: "Управление событиями",
    events_admin_subtitle: "Список для создания, редактирования и контроля.",
    add_event: "Добавить событие",
    tasks_admin_title: "Операционный чеклист",
    tasks_admin_subtitle: "Задачи, ответственные и приоритет.",
    add_task: "Добавить задачу",
    team_admin_title: "Участники команды",
    team_admin_subtitle: "Роли, доступ и обязанности.",
    add_member: "Добавить участника",
    settings_access: "Доступ и роли",
    settings_access_text: "Включите роли для координатора, логистики, медиа и безопасности.",
    setting_login: "Обязательный вход",
    setting_roles: "Роли для участников",
    settings_lang: "Языки",
    settings_lang_text: "Интерфейс готов для румынского, русского и английского.",
    views: {
      dashboard: "Центр управления авто событиями",
      events: "Управление событиями",
      tasks: "Операционный чеклист",
      team: "Управление командой",
      settings: "Настройки администратора",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Логистика", "Виктор", "Почти готово", 82],
      ["Track Day Summer", "Автодром", "Трасса и безопасность", "Анна", "В работе", 58],
      ["Retro Auto Picnic", "Парк Valea Morilor", "Выставка", "Михаил", "Есть риск", 43],
    ],
    tasks: [
      ["Подтвердить охрану и скорую помощь", "Анна", "Срочно"],
      ["План доступа для команды и гостей", "Виктор", "Срочно"],
      ["Список медиа оборудования", "Ирина", "Средне"],
      ["Проверка разрешений локации", "Михаил", "Средне"],
    ],
    team: [
      ["Виктор", "Координатор логистики", "Admin"],
      ["Анна", "Безопасность и трасса", "Editor"],
      ["Ирина", "Медиа и коммуникация", "Editor"],
      ["Михаил", "Партнеры и разрешения", "Viewer"],
    ],
  },
  en: {
    brand_subtitle: "Internal operations",
    admin_label: "Admin panel",
    login_eyebrow: "Team access",
    login_title: "Log in to the organizer panel",
    login_subtitle: "Manage events, tasks, members and resources from one place.",
    email_label: "Email",
    password_label: "Password",
    login_hint: "Demo: admin@autocrew.md / admin123",
    login_button: "Enter admin panel",
    login_error: "Incorrect email or password.",
    nav_dashboard: "Dashboard",
    nav_events: "Events",
    nav_tasks: "Checklist",
    nav_team: "Team",
    nav_settings: "Settings",
    logout: "Logout",
    eyebrow: "Internal organizer workspace",
    page_title: "Command center for auto events",
    language_label: "Language",
    new_event: "New event",
    metric_events: "Active events",
    metric_events_note: "2 in intensive preparation",
    metric_tasks: "Open tasks",
    metric_tasks_note: "7 due this week",
    metric_team: "Team members",
    metric_team_note: "5 operational roles",
    metric_risks: "Blockers",
    metric_risks_note: "Needs a quick decision",
    events_title: "Events in progress",
    events_subtitle: "Status, owner and progress for each event.",
    view_all: "View all",
    priority_title: "Today priorities",
    responsible: "Owner",
    ready: "Almost ready",
    risk: "At risk",
    edit: "Edit",
    events_admin_title: "Event management",
    events_admin_subtitle: "List for creation, editing and tracking.",
    add_event: "Add event",
    tasks_admin_title: "Operational checklist",
    tasks_admin_subtitle: "Tasks, owners and priority.",
    add_task: "Add task",
    team_admin_title: "Team members",
    team_admin_subtitle: "Roles, access and responsibilities.",
    add_member: "Add member",
    settings_access: "Access and roles",
    settings_access_text: "Enable roles for coordinator, logistics, media and safety.",
    setting_login: "Required login",
    setting_roles: "Member roles",
    settings_lang: "Languages",
    settings_lang_text: "The interface is prepared for Romanian, Russian and English.",
    views: {
      dashboard: "Command center for auto events",
      events: "Event management",
      tasks: "Operational checklist",
      team: "Team management",
      settings: "Admin settings",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistics", "Victor", "Almost ready", 82],
      ["Track Day Summer", "Autodrome", "Track and safety", "Ana", "In progress", 58],
      ["Retro Auto Picnic", "Valea Morilor Park", "Exhibition", "Mihai", "At risk", 43],
    ],
    tasks: [
      ["Confirm security and ambulance", "Ana", "Urgent"],
      ["Staff and guest access plan", "Victor", "Urgent"],
      ["Media equipment list", "Irina", "Medium"],
      ["Check venue permits", "Mihai", "Medium"],
    ],
    team: [
      ["Victor", "Logistics coordinator", "Admin"],
      ["Ana", "Safety and track", "Editor"],
      ["Irina", "Media and comms", "Editor"],
      ["Mihai", "Partners and permits", "Viewer"],
    ],
  },
};

const state = {
  language: localStorage.getItem("autocrew_language") || "ro",
  view: "dashboard",
};

const loginScreen = document.querySelector("#login-screen");
const adminApp = document.querySelector("#admin-app");
const loginForm = document.querySelector("#login-form");
const formError = document.querySelector("#form-error");
const languageSelect = document.querySelector("#language");
const viewTitle = document.querySelector("#view-title");
const eventList = document.querySelector("#event-list");
const eventsTable = document.querySelector("#events-table");
const priorityList = document.querySelector("#priority-list");
const tasksTable = document.querySelector("#tasks-table");
const teamList = document.querySelector("#team-list");

function t() {
  return dictionaries[state.language];
}

function statusClass(status) {
  if (status === t().ready) return "status-ready";
  if (status === t().risk) return "status-risk";
  return "status-progress";
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderTranslations() {
  const dictionary = t();
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof dictionary[key] === "string") {
      node.textContent = dictionary[key];
    }
  });
  viewTitle.textContent = dictionary.views[state.view];
}

function renderEvents() {
  eventList.innerHTML = t().events
    .map(([name, location, type, owner, status, percent]) => `
      <article class="event-row">
        <div class="event-main"><strong>${name}</strong><span>${location} · ${type}</span></div>
        <div class="event-meta">${t().responsible}: <strong>${owner}</strong></div>
        <span class="status-pill ${statusClass(status)}">${status}</span>
        <div class="progress" aria-label="${percent}%"><small>${percent}%</small><div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div></div>
      </article>
    `)
    .join("");

  eventsTable.innerHTML = t().events
    .map(([name, location, type, owner, status]) => `
      <article class="table-row">
        <div><strong>${name}</strong><span>${location}</span></div>
        <span>${type}</span>
        <span class="status-pill ${statusClass(status)}">${status}</span>
        <button class="small-action" type="button">${t().edit}</button>
      </article>
    `)
    .join("");
}

function renderTasks() {
  const taskMarkup = t().tasks
    .map(([task, owner, priority]) => `
      <article class="task-item">
        <div class="task-top"><strong>${task}</strong><span class="priority">${priority}</span></div>
        <span>${t().responsible}: ${owner}</span>
      </article>
    `)
    .join("");

  priorityList.innerHTML = taskMarkup;
  tasksTable.innerHTML = taskMarkup;
}

function renderTeam() {
  teamList.innerHTML = t().team
    .map(([name, role, access]) => `
      <article class="team-member">
        <div class="avatar">${initials(name)}</div>
        <div><strong>${name}</strong><span>${role} · ${access}</span></div>
        <button class="small-action" type="button">${t().edit}</button>
      </article>
    `)
    .join("");
}

function render() {
  renderTranslations();
  renderEvents();
  renderTasks();
  renderTeam();
}

function showAdmin() {
  loginScreen.classList.add("is-hidden");
  adminApp.classList.remove("is-hidden");
  render();
}

function showLogin() {
  adminApp.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  if (email === "admin@autocrew.md" && password === "admin123") {
    localStorage.setItem("autocrew_logged_in", "yes");
    formError.classList.remove("visible");
    showAdmin();
    return;
  }

  formError.classList.add("visible");
});

document.querySelector("#logout-button").addEventListener("click", () => {
  localStorage.removeItem("autocrew_logged_in");
  showLogin();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".admin-view").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.viewPanel === state.view);
    });
    viewTitle.textContent = t().views[state.view];
  });
});

languageSelect.value = state.language;
languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("autocrew_language", state.language);
  render();
});

renderTranslations();
if (localStorage.getItem("autocrew_logged_in") === "yes") {
  showAdmin();
} else {
  showLogin();
}
