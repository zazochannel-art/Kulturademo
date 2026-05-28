const dictionaries = {
  ro: {
    brand_subtitle: "Organizare interna",
    admin_label: "Admin panel",
    login_eyebrow: "Acces echipa",
    login_title: "Logare in panoul organizatorilor",
    login_subtitle: "Gestioneaza evenimente, task-uri, membri si resurse dintr-un singur loc.",
    email_label: "Email",
    password_label: "Parola",
    login_hint: "Introdu emailul si parola primite de la admin.",
    login_button: "Intra in admin panel",
    login_error: "Email sau parola incorecta.",
    nav_dashboard: "Dashboard",
    nav_cars: "Auto participanti",
    nav_events: "Evenimente",
    nav_tasks: "Sarcine",
    nav_team: "Echipa",
    nav_resources: "Resurse",
    logout: "Iesire",
    eyebrow: "Panou intern pentru organizatori",
    language_label: "Limba",
    new_event: "Eveniment nou",
    profile_button: "Profil",
    profile_title: "Profilul meu",
    profile_subtitle: "Datele de acces pentru contul tau de organizator.",
    profile_save: "Salveaza profilul",
    profile_saved: "Profilul a fost salvat.",
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
    delete: "Sterge",
    delete_confirm: "Sigur vrei sa stergi acest element?",
    events_admin_title: "Administrare evenimente",
    events_admin_subtitle: "Lista pentru creare, editare si urmarire.",
    add_event: "Adauga eveniment",
    cars_admin_title: "Auto participanti",
    cars_admin_subtitle: "Lista masinilor si soferilor pentru evenimentele interne.",
    add_car: "Adauga auto",
    cars_search_label: "Cauta participant",
    cars_search_placeholder: "Cauta dupa auto, sofer, numar, zona, categorie sau status",
    cars_empty: "Nu a fost gasit niciun participant.",
    tasks_admin_title: "Sarcine operationale",
    tasks_admin_subtitle: "Task-uri, responsabili si prioritate.",
    add_task: "Adauga task",
    team_admin_title: "Membrii echipei",
    team_admin_subtitle: "Roluri, acces si responsabilitati.",
    add_member: "Adauga membru",
    resources_admin_title: "Resurse si documente",
    resources_admin_subtitle: "Echipamente, furnizori si acte necesare pentru evenimente.",
    add_resource: "Adauga resursa",
    views: {
      dashboard: "Centrul de comanda al evenimentelor auto",
      cars: "Auto participanti",
      events: "Administrare evenimente",
      tasks: "Sarcine operationale",
      team: "Administrare echipa",
      resources: "Resurse si documente",
      profile: "Profilul meu",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistica", "Victor", "Aproape gata", 82],
      ["Track Day Summer", "Autodrom", "Pista si securitate", "Ana", "In lucru", 58],
      ["Retro Auto Picnic", "Parcul Valea Morilor", "Expozitie", "Mihai", "Cu risc", 43],
    ],
    cars: [
      ["BMW E36", "Alexei Rusu", "KLT 036", "Zona A", "Drift", "Confirmat"],
      ["Toyota Supra MK4", "Dumitru Ceban", "KLT 404", "Zona B", "Show car", "In verificare"],
      ["Nissan Silvia S15", "Maxim Moraru", "KLT 015", "Zona A", "Track", "Confirmat"],
      ["Audi RS3", "Cristina Lungu", "KLT 303", "Zona C", "Expo", "Asteapta acte"],
    ],
    tasks: [
      ["Confirmare securitate si ambulanta", "Ana", "Urgent"],
      ["Plan acces staff si invitati", "Victor", "Urgent"],
      ["Lista echipamente media", "Irina", "Mediu"],
      ["Verificare autorizatii locatie", "Mihai", "Mediu"],
    ],
    team: [
      ["Victor", "Coordonator logistica", "Admin", "admin@kultura.md", "admin123"],
      ["Ana", "Securitate si pista", "Editor", "ana@kultura.md", "ana123"],
      ["Irina", "Media si comunicare", "Editor", "irina@kultura.md", "irina123"],
      ["Mihai", "Parteneri si autorizatii", "Viewer", "mihai@kultura.md", "mihai123"],
    ],
    resources: [
      ["Autorizatii", "Permise de locatie, acces public si siguranta", "In lucru"],
      ["Echipamente", "Statii radio, garduri, conuri, cort staff", "Pregatit"],
      ["Furnizori", "Sunet, catering, securitate, ambulanta", "Confirmare"],
      ["Documente", "Plan acces, schema locatiei, lista contacte", "Actualizat"],
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
    login_hint: "Введите email и пароль, полученные от администратора.",
    login_button: "Войти в админ панель",
    login_error: "Неверный email или пароль.",
    nav_dashboard: "Панель",
    nav_cars: "Авто участников",
    nav_events: "События",
    nav_tasks: "Задачи",
    nav_team: "Команда",
    nav_resources: "Ресурсы",
    logout: "Выход",
    eyebrow: "Внутренняя панель организаторов",
    language_label: "Язык",
    new_event: "Новое событие",
    profile_button: "Профиль",
    profile_title: "Мой профиль",
    profile_subtitle: "Данные доступа для вашего аккаунта организатора.",
    profile_save: "Сохранить профиль",
    profile_saved: "Профиль сохранен.",
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
    delete: "Удалить",
    delete_confirm: "Точно удалить этот элемент?",
    events_admin_title: "Управление событиями",
    events_admin_subtitle: "Список для создания, редактирования и контроля.",
    add_event: "Добавить событие",
    cars_admin_title: "Авто участников",
    cars_admin_subtitle: "Список машин и водителей для внутренних событий.",
    add_car: "Добавить авто",
    cars_search_label: "Поиск участника",
    cars_search_placeholder: "Искать по авто, водителю, номеру, зоне, категории или статусу",
    cars_empty: "Участники не найдены.",
    tasks_admin_title: "Операционные задачи",
    tasks_admin_subtitle: "Задачи, ответственные и приоритет.",
    add_task: "Добавить задачу",
    team_admin_title: "Участники команды",
    team_admin_subtitle: "Роли, доступ и обязанности.",
    add_member: "Добавить участника",
    resources_admin_title: "Ресурсы и документы",
    resources_admin_subtitle: "Оборудование, поставщики и документы для событий.",
    add_resource: "Добавить ресурс",
    views: {
      dashboard: "Центр управления авто событиями",
      cars: "Авто участников",
      events: "Управление событиями",
      tasks: "Операционные задачи",
      team: "Управление командой",
      resources: "Ресурсы и документы",
      profile: "Мой профиль",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Логистика", "Виктор", "Почти готово", 82],
      ["Track Day Summer", "Автодром", "Трасса и безопасность", "Анна", "В работе", 58],
      ["Retro Auto Picnic", "Парк Valea Morilor", "Выставка", "Михаил", "Есть риск", 43],
    ],
    cars: [
      ["BMW E36", "Алексей Русу", "KLT 036", "Зона A", "Дрифт", "Подтверждено"],
      ["Toyota Supra MK4", "Дмитрий Чебан", "KLT 404", "Зона B", "Show car", "На проверке"],
      ["Nissan Silvia S15", "Максим Морару", "KLT 015", "Зона A", "Track", "Подтверждено"],
      ["Audi RS3", "Кристина Лунгу", "KLT 303", "Зона C", "Expo", "Ждет документы"],
    ],
    tasks: [
      ["Подтвердить охрану и скорую помощь", "Анна", "Срочно"],
      ["План доступа для команды и гостей", "Виктор", "Срочно"],
      ["Список медиа оборудования", "Ирина", "Средне"],
      ["Проверка разрешений локации", "Михаил", "Средне"],
    ],
    team: [
      ["Виктор", "Координатор логистики", "Admin", "admin@kultura.md", "admin123"],
      ["Анна", "Безопасность и трасса", "Editor", "ana@kultura.md", "ana123"],
      ["Ирина", "Медиа и коммуникация", "Editor", "irina@kultura.md", "irina123"],
      ["Михаил", "Партнеры и разрешения", "Viewer", "mihai@kultura.md", "mihai123"],
    ],
    resources: [
      ["Разрешения", "Локация, публичный доступ и безопасность", "В работе"],
      ["Оборудование", "Рации, ограждения, конусы, шатер команды", "Готово"],
      ["Поставщики", "Звук, кейтеринг, охрана, скорая помощь", "Подтвердить"],
      ["Документы", "План доступа, схема локации, список контактов", "Обновлено"],
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
    login_hint: "Enter the email and password received from admin.",
    login_button: "Enter admin panel",
    login_error: "Incorrect email or password.",
    nav_dashboard: "Dashboard",
    nav_cars: "Participant cars",
    nav_events: "Events",
    nav_tasks: "Tasks",
    nav_team: "Team",
    nav_resources: "Resources",
    logout: "Logout",
    eyebrow: "Internal organizer workspace",
    language_label: "Language",
    new_event: "New event",
    profile_button: "Profile",
    profile_title: "My profile",
    profile_subtitle: "Access details for your organizer account.",
    profile_save: "Save profile",
    profile_saved: "Profile saved.",
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
    delete: "Delete",
    delete_confirm: "Are you sure you want to delete this item?",
    events_admin_title: "Event management",
    events_admin_subtitle: "List for creation, editing and tracking.",
    add_event: "Add event",
    cars_admin_title: "Participant cars",
    cars_admin_subtitle: "List of cars and drivers for internal events.",
    add_car: "Add car",
    cars_search_label: "Search participant",
    cars_search_placeholder: "Search by car, driver, plate, zone, category or status",
    cars_empty: "No participants found.",
    tasks_admin_title: "Operational tasks",
    tasks_admin_subtitle: "Tasks, owners and priority.",
    add_task: "Add task",
    team_admin_title: "Team members",
    team_admin_subtitle: "Roles, access and responsibilities.",
    add_member: "Add member",
    resources_admin_title: "Resources and documents",
    resources_admin_subtitle: "Equipment, vendors and documents needed for events.",
    add_resource: "Add resource",
    views: {
      dashboard: "Command center for auto events",
      cars: "Participant cars",
      events: "Event management",
      tasks: "Operational tasks",
      team: "Team management",
      resources: "Resources and documents",
      profile: "My profile",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistics", "Victor", "Almost ready", 82],
      ["Track Day Summer", "Autodrome", "Track and safety", "Ana", "In progress", 58],
      ["Retro Auto Picnic", "Valea Morilor Park", "Exhibition", "Mihai", "At risk", 43],
    ],
    cars: [
      ["BMW E36", "Alexei Rusu", "KLT 036", "Zone A", "Drift", "Confirmed"],
      ["Toyota Supra MK4", "Dumitru Ceban", "KLT 404", "Zone B", "Show car", "In review"],
      ["Nissan Silvia S15", "Maxim Moraru", "KLT 015", "Zone A", "Track", "Confirmed"],
      ["Audi RS3", "Cristina Lungu", "KLT 303", "Zone C", "Expo", "Waiting docs"],
    ],
    tasks: [
      ["Confirm security and ambulance", "Ana", "Urgent"],
      ["Staff and guest access plan", "Victor", "Urgent"],
      ["Media equipment list", "Irina", "Medium"],
      ["Check venue permits", "Mihai", "Medium"],
    ],
    team: [
      ["Victor", "Logistics coordinator", "Admin", "admin@kultura.md", "admin123"],
      ["Ana", "Safety and track", "Editor", "ana@kultura.md", "ana123"],
      ["Irina", "Media and comms", "Editor", "irina@kultura.md", "irina123"],
      ["Mihai", "Partners and permits", "Viewer", "mihai@kultura.md", "mihai123"],
    ],
    resources: [
      ["Permits", "Venue, public access and safety permits", "In progress"],
      ["Equipment", "Radios, barriers, cones, staff tent", "Ready"],
      ["Vendors", "Sound, catering, security, ambulance", "Confirm"],
      ["Documents", "Access plan, venue map, contact list", "Updated"],
    ],
  },
};

const state = {
  language: localStorage.getItem("autocrew_language") || "ro",
  view: "dashboard",
};

const roleLabels = {
  ro: { admin: "Admin general", editor: "Coordonator evenimente", viewer: "Observator" },
  ru: { admin: "Главный администратор", editor: "Координатор событий", viewer: "Наблюдатель" },
  en: { admin: "General admin", editor: "Event coordinator", viewer: "Observer" },
};

const dataKeys = ["events", "cars", "tasks", "team", "resources"];
const savedData = JSON.parse(localStorage.getItem("kultura_admin_data") || "{}");

Object.entries(savedData).forEach(([language, collections]) => {
  if (!dictionaries[language]) return;
  dataKeys.forEach((key) => {
    if (Array.isArray(collections[key])) {
      dictionaries[language][key] = collections[key];
    }
  });
});

function normalizeTeamRows() {
  const defaults = {
    Victor: ["admin@kultura.md", "admin123"],
    Ana: ["ana@kultura.md", "ana123"],
    Irina: ["irina@kultura.md", "irina123"],
    Mihai: ["mihai@kultura.md", "mihai123"],
    Виктор: ["admin@kultura.md", "admin123"],
    Анна: ["ana@kultura.md", "ana123"],
    Ирина: ["irina@kultura.md", "irina123"],
    Михаил: ["mihai@kultura.md", "mihai123"],
  };

  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.team = dictionary.team.map((member, index) => {
      const fallback = defaults[member[0]] || [`member${index + 1}@kultura.md`, `pass${index + 1}`];
      const email = String(member[3] || "").trim().toLowerCase();
      const shouldRefreshSeededAdmin = fallback[0] === "admin@kultura.md" && (!email || email === "admin@autocrew.md");

      if (member.length >= 5 && !shouldRefreshSeededAdmin) return member;
      return [member[0], member[1], member[2], fallback[0], member[4] || fallback[1]];
    });
  });
}

normalizeTeamRows();

const modalText = {
  ro: { add: "Adauga", edit: "Editeaza", save: "Salveaza", cancel: "Anuleaza", close: "Inchide" },
  ru: { add: "Добавить", edit: "Изменить", save: "Сохранить", cancel: "Отмена", close: "Закрыть" },
  en: { add: "Add", edit: "Edit", save: "Save", cancel: "Cancel", close: "Close" },
};

const formConfigs = {
  events: {
    title: { ro: "eveniment", ru: "событие", en: "event" },
    fields: [
      { label: { ro: "Nume", ru: "Название", en: "Name" }, placeholder: "Night Drive Meetup" },
      { label: { ro: "Locatie", ru: "Локация", en: "Location" }, placeholder: "Chisinau Arena" },
      { label: { ro: "Tip", ru: "Тип", en: "Type" }, placeholder: "Logistica" },
      { label: { ro: "Responsabil", ru: "Ответственный", en: "Owner" }, placeholder: "Victor" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "In lucru" },
      { label: { ro: "Progres", ru: "Прогресс", en: "Progress" }, placeholder: "60", type: "number", min: 0, max: 100 },
    ],
  },
  cars: {
    title: { ro: "auto", ru: "авто", en: "car" },
    fields: [
      { label: { ro: "Masina", ru: "Машина", en: "Car" }, placeholder: "BMW E36" },
      { label: { ro: "Sofer", ru: "Водитель", en: "Driver" }, placeholder: "Alexei Rusu" },
      { label: { ro: "Numarul de inmatriculare", ru: "Регистрационный номер", en: "License plate" }, placeholder: "KLT 036" },
      { label: { ro: "Zona", ru: "Зона", en: "Zone" }, placeholder: "Zona A / B / C" },
      { label: { ro: "Categorie", ru: "Категория", en: "Category" }, placeholder: "Drift" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "Confirmat" },
    ],
  },
  tasks: {
    title: { ro: "task", ru: "задачу", en: "task" },
    fields: [
      { label: { ro: "Task", ru: "Задача", en: "Task" }, placeholder: "Confirmare securitate" },
      { label: { ro: "Responsabil", ru: "Ответственный", en: "Owner" }, placeholder: "Ana" },
      { label: { ro: "Prioritate", ru: "Приоритет", en: "Priority" }, placeholder: "Urgent" },
    ],
  },
  team: {
    title: { ro: "membru", ru: "участника", en: "member" },
    fields: [
      { label: { ro: "Nume", ru: "Имя", en: "Name" }, placeholder: "Victor" },
      { label: { ro: "Rol", ru: "Роль", en: "Role" }, placeholder: "Coordonator logistica" },
      { label: { ro: "Acces", ru: "Доступ", en: "Access" }, placeholder: "Admin", type: "select", options: ["Admin", "Editor", "Viewer"] },
      { label: { ro: "Email", ru: "Email", en: "Email" }, placeholder: "admin@kultura.md", type: "email" },
      { label: { ro: "Parola", ru: "Пароль", en: "Password" }, placeholder: "admin123" },
    ],
  },
  resources: {
    title: { ro: "resursa", ru: "ресурс", en: "resource" },
    fields: [
      { label: { ro: "Titlu", ru: "Название", en: "Title" }, placeholder: "Autorizatii" },
      { label: { ro: "Descriere", ru: "Описание", en: "Description" }, placeholder: "Acte necesare pentru locatie" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "In lucru" },
    ],
  },
};

const loginScreen = document.querySelector("#login-screen");
const adminApp = document.querySelector("#admin-app");
const loginForm = document.querySelector("#login-form");
const formError = document.querySelector("#form-error");
const languageSelect = document.querySelector("#language");
const viewTitle = document.querySelector("#view-title");
const currentUserName = document.querySelector("#current-user-name");
const currentUserRole = document.querySelector("#current-user-role");
const eventList = document.querySelector("#event-list");
const carsTable = document.querySelector("#cars-table");
const carsSearch = document.querySelector("#cars-search");
const eventsTable = document.querySelector("#events-table");
const priorityList = document.querySelector("#priority-list");
const tasksTable = document.querySelector("#tasks-table");
const teamList = document.querySelector("#team-list");
const resourceList = document.querySelector("#resource-list");
const profileForm = document.querySelector("#profile-form");
const profileAvatar = document.querySelector("#profile-avatar");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const profileEmail = document.querySelector("#profile-email");
const profilePassword = document.querySelector("#profile-password");
const profileSuccess = document.querySelector("#profile-success");

function t() {
  return dictionaries[state.language];
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("kultura_current_user") || "null");
}

function accessKey(access) {
  return String(access || "").trim().toLowerCase();
}

function roleLabel(role) {
  const key = accessKey(role);
  return roleLabels[state.language][key] || roleLabels.ro[key] || role;
}

function canManage(kind) {
  const user = getCurrentUser();
  const role = accessKey(user?.role);
  if (!user) return false;
  if (role === "admin") return true;
  if (role === "editor") return kind !== "team";
  return false;
}

function uiText(key) {
  return modalText[state.language][key] || modalText.ro[key];
}

function labelText(value) {
  return value[state.language] || value.ro;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function saveData() {
  const payload = {};
  Object.keys(dictionaries).forEach((language) => {
    payload[language] = {};
    dataKeys.forEach((key) => {
      payload[language][key] = dictionaries[language][key];
    });
  });
  localStorage.setItem("kultura_admin_data", JSON.stringify(payload));
}

function findTeamUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  let member = null;

  Object.values(dictionaries).some((dictionary) => {
    member = dictionary.team.find(([, , , memberEmail, memberPassword]) => {
      return String(memberEmail).trim().toLowerCase() === normalizedEmail && String(memberPassword) === password;
    });
    return Boolean(member);
  });

  if (!member) return null;
  const [name, roleDescription, access, memberEmail] = member;
  return { name, email: memberEmail, role: access, roleDescription };
}

function findCurrentTeamMember() {
  const user = getCurrentUser();
  if (!user) return null;
  const email = String(user.email).trim().toLowerCase();
  return t().team.find((member) => String(member[3]).trim().toLowerCase() === email) || null;
}

function loginUser(user) {
  localStorage.setItem("autocrew_logged_in", "yes");
  localStorage.setItem("kultura_current_user", JSON.stringify({ name: user.name, email: user.email, role: user.role }));
  formError.classList.remove("visible");
  closeModal();
  showAdmin();
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (typeof dictionary[key] === "string") {
      node.placeholder = dictionary[key];
    }
  });
  if (viewTitle) {
    viewTitle.textContent = dictionary.views[state.view];
  }
  renderCurrentUser();
}

function renderCurrentUser() {
  const user = getCurrentUser();
  if (!user || !currentUserName || !currentUserRole) return;
  currentUserName.textContent = user.name;
  currentUserRole.textContent = roleLabel(user.role);
}

function renderProfile() {
  const user = getCurrentUser();
  const member = findCurrentTeamMember();
  if (!user || !profileForm || !member) return;

  profileAvatar.textContent = initials(member[0]);
  profileName.textContent = member[0];
  profileRole.textContent = `${member[1]} - ${roleLabel(member[2])}`;
  profileEmail.value = member[3];
  profilePassword.value = member[4];
}

function applyPermissions() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.hidden = !canManage(button.dataset.add);
  });

  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.hidden = !canManage(button.dataset.edit);
  });

  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.hidden = !canManage(button.dataset.delete);
  });
}

function renderEvents() {
  if (!eventList || !eventsTable) return;

  eventList.innerHTML = t().events
    .map(([name, location, type, owner, status, percent]) => `
      <article class="event-row">
        <div class="event-main"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(location)} - ${escapeHtml(type)}</span></div>
        <div class="event-meta">${t().responsible}: <strong>${escapeHtml(owner)}</strong></div>
        <span class="status-pill ${statusClass(status)}">${escapeHtml(status)}</span>
        <div class="progress" aria-label="${percent}%"><small>${percent}%</small><div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div></div>
      </article>
    `)
    .join("");

  eventsTable.innerHTML = t().events
    .map(([name, location, type, owner, status], index) => `
      <article class="table-row">
        <div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(location)}</span></div>
        <span>${escapeHtml(type)}</span>
        <span class="status-pill ${statusClass(status)}">${escapeHtml(status)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="events" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="events" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function renderCars() {
  if (!carsTable) return;

  const query = carsSearch ? carsSearch.value.trim().toLowerCase() : "";
  const cars = t().cars.filter((car) => car.join(" ").toLowerCase().includes(query));

  if (cars.length === 0) {
    carsTable.innerHTML = `<div class="empty-state">${t().cars_empty}</div>`;
    return;
  }

  carsTable.innerHTML = cars
    .map((row) => {
      const [car, driver, third, fourth, fifth, sixth] = row;
      const hasZoneData = row.length >= 6;
      const plate = hasZoneData ? third : "-";
      const zone = hasZoneData ? fourth : "Zona A";
      const category = hasZoneData ? fifth : third;
      const status = hasZoneData ? sixth : fourth;
      const index = t().cars.findIndex((item) => item[0] === car && item[1] === driver);
      return `
      <article class="table-row">
        <div><strong>${escapeHtml(car)}</strong><span>${escapeHtml(driver)} - ${escapeHtml(plate)} - ${escapeHtml(zone)}</span></div>
        <span>${escapeHtml(category)}</span>
        <span class="status-pill status-progress">${escapeHtml(status)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="cars" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="cars" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderTasks() {
  if (!priorityList || !tasksTable) return;

  const taskMarkup = t().tasks
    .map(([task, owner, priority], index) => `
      <article class="task-item">
        <div class="task-top"><strong>${escapeHtml(task)}</strong><span class="priority">${escapeHtml(priority)}</span></div>
        <span>${t().responsible}: ${escapeHtml(owner)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="tasks" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="tasks" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");

  priorityList.innerHTML = taskMarkup;
  tasksTable.innerHTML = taskMarkup;
}

function renderTeam() {
  if (!teamList) return;

  teamList.innerHTML = t().team
    .map(([name, role, access, email, password], index) => `
      <article class="team-member">
        <div class="avatar">${escapeHtml(initials(name))}</div>
        <div>
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(role)} - ${escapeHtml(access)}</span>
          <span>${escapeHtml(email)} - ${escapeHtml(password)}</span>
        </div>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="team" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="team" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function renderResources() {
  if (!resourceList) return;

  resourceList.innerHTML = t().resources
    .map(([title, description, status], index) => `
      <article class="resource-card">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(description)}</span>
        <span class="status-pill status-progress">${escapeHtml(status)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="resources" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="resources" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function renderMetrics() {
  const riskWords = ["risc", "risk", "риск"];
  const riskCount = t().events.filter((event) => {
    const status = String(event[4]).toLowerCase();
    return riskWords.some((word) => status.includes(word));
  }).length;

  const counts = {
    events: t().events.length,
    tasks: t().tasks.length,
    team: t().team.length,
    risks: riskCount,
  };

  Object.entries(counts).forEach(([key, value]) => {
    const node = document.querySelector(`[data-count="${key}"]`);
    if (node) node.textContent = value;
  });
}

function closeModal() {
  document.querySelector(".modal-backdrop")?.remove();
}

function editorValues(kind, values) {
  if (kind === "cars" && values.length === 4) {
    return [values[0], values[1], "", "Zona A", values[2], values[3]];
  }
  return values;
}

function openEditor(kind, index = null) {
  const config = formConfigs[kind];
  const collection = t()[kind];
  if (!config || !collection || !canManage(kind)) return;

  const isEdit = Number.isInteger(index);
  const values = isEdit ? editorValues(kind, collection[index]) : [];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true">
      <div class="modal-header">
        <h2>${escapeHtml(isEdit ? uiText("edit") : uiText("add"))} ${escapeHtml(labelText(config.title))}</h2>
        <button class="modal-close" type="button" aria-label="${escapeHtml(uiText("close"))}">×</button>
      </div>
      <form class="modal-form">
        ${config.fields
          .map((field, fieldIndex) => `
            <label>
              <span>${escapeHtml(labelText(field.label))}</span>
              ${
                field.type === "select"
                  ? `<select name="field-${fieldIndex}" required>
                      ${field.options
                        .map((option) => `<option value="${escapeHtml(option)}" ${option === values[fieldIndex] ? "selected" : ""}>${escapeHtml(option)}</option>`)
                        .join("")}
                    </select>`
                  : `<input
                      type="${field.type || "text"}"
                      name="field-${fieldIndex}"
                      value="${escapeHtml(values[fieldIndex] ?? "")}"
                      placeholder="${escapeHtml(field.placeholder)}"
                      ${field.min !== undefined ? `min="${field.min}"` : ""}
                      ${field.max !== undefined ? `max="${field.max}"` : ""}
                      required
                    />`
              }
            </label>
          `)
          .join("")}
        <div class="modal-actions">
          <button class="ghost-action" type="button" data-modal-cancel>${escapeHtml(uiText("cancel"))}</button>
          <button class="primary-action" type="submit">${escapeHtml(uiText("save"))}</button>
        </div>
      </form>
    </section>
  `;

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop || event.target.closest(".modal-close") || event.target.closest("[data-modal-cancel]")) {
      closeModal();
    }
  });

  backdrop.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const nextValues = config.fields.map((field, fieldIndex) => {
      const input = event.currentTarget.elements[`field-${fieldIndex}`];
      if (field.type === "number") {
        return Math.max(field.min ?? 0, Math.min(field.max ?? 100, Number(input.value)));
      }
      return input.value.trim();
    });

    if (isEdit) {
      collection[index] = nextValues;
    } else {
      collection.unshift(nextValues);
    }

    saveData();
    closeModal();
    render();
  });

  document.body.append(backdrop);
  backdrop.querySelector("input")?.focus();
}

function deleteItem(kind, index) {
  const collection = t()[kind];
  if (!collection || !canManage(kind)) return;
  if (!window.confirm(t().delete_confirm)) return;

  collection.splice(index, 1);
  saveData();
  render();
}

function render() {
  renderTranslations();
  renderMetrics();
  renderCars();
  renderEvents();
  renderTasks();
  renderTeam();
  renderResources();
  renderProfile();
  applyPermissions();
}

function showView(view) {
  state.view = view;
  if (profileSuccess) profileSuccess.classList.remove("visible");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.querySelectorAll(".admin-view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
  viewTitle.textContent = t().views[view];
  renderProfile();
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
  const user = findTeamUser(email, password);

  if (user) {
    loginUser(user);
    return;
  }

  formError.classList.add("visible");
});

document.querySelector("#logout-button").addEventListener("click", () => {
  localStorage.removeItem("autocrew_logged_in");
  localStorage.removeItem("kultura_current_user");
  showLogin();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

document.querySelectorAll("[data-view-shortcut]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.viewShortcut);
  });
});

languageSelect.value = state.language;
languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("autocrew_language", state.language);
  render();
});

if (carsSearch) {
  carsSearch.addEventListener("input", renderCars);
}

if (profileForm) {
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const oldEmail = String(user.email).trim().toLowerCase();
    const nextEmail = profileEmail.value.trim();
    const nextPassword = profilePassword.value.trim();
    let updatedUser = null;

    Object.values(dictionaries).forEach((dictionary) => {
      const member = dictionary.team.find((item) => String(item[3]).trim().toLowerCase() === oldEmail);
      if (!member) return;
      member[3] = nextEmail;
      member[4] = nextPassword;
      updatedUser = { name: member[0], email: nextEmail, role: member[2] };
    });

    if (!updatedUser) return;
    localStorage.setItem("kultura_current_user", JSON.stringify(updatedUser));
    saveData();
    render();
    profileSuccess.classList.add("visible");
  });
}

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => openEditor(button.dataset.add));
});

document.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    deleteItem(deleteButton.dataset.delete, Number(deleteButton.dataset.index));
    return;
  }

  const editButton = event.target.closest("[data-edit]");
  if (!editButton) return;
  openEditor(editButton.dataset.edit, Number(editButton.dataset.index));
});

renderTranslations();
if (localStorage.getItem("autocrew_logged_in") === "yes") {
  if (!getCurrentUser()) {
    const [name, , access, email] = t().team[0];
    localStorage.setItem("kultura_current_user", JSON.stringify({ name, email, role: access }));
  }
  showAdmin();
} else {
  showLogin();
}
