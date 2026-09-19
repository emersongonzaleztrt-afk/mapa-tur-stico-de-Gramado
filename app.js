const touristSpots = [
  {
    id: 1,
    nome: 'Rua Coberta',
    categoria: 'lazer',
    latitude: -29.3783,
    longitude: -50.8731,
    descricao: 'A rua mais charmosa de Gramado, com lojas, cafés e um ambiente acolhedor para passeios ao ar livre.',
    imagem:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Centro de Gramado'
  },
  {
    id: 2,
    nome: 'Igreja Matriz São Pedro',
    categoria: 'arquitetura',
    latitude: -29.3764,
    longitude: -50.8754,
    descricao: 'Uma obra emblemática com arquitetura religiosa e ambiente histórico que encanta visitantes em qualquer época do ano.',
    imagem:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Praça das Comunicações'
  },
  {
    id: 3,
    nome: 'Lago Negro',
    categoria: 'natureza',
    latitude: -29.397,
    longitude: -50.874,
    descricao: 'Um dos cartões-postais da cidade, rodeado por natureza, trilhas e um cenário perfeito para fotos e momentos tranquilos.',
    imagem:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Av. das Hortênsias'
  },
  {
    id: 4,
    nome: 'Mini Mundo',
    categoria: 'lazer',
    latitude: -29.3531,
    longitude: -50.8788,
    descricao: 'Um parque de miniaturas com réplicas de monumentos e cenários brasileiros, ideal para famílias e grupos.',
    imagem:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Rod. RS-235'
  },
  {
    id: 5,
    nome: 'Snowland',
    categoria: 'lazer',
    latitude: -29.3836,
    longitude: -50.8711,
    descricao: 'Experiência de neve em Gramado com atrações para os mais diversos públicos, muito procurada por turistas.',
    imagem:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Rua das Flores'
  },
  {
    id: 6,
    nome: 'Lago Joaquina Rita Bier',
    categoria: 'natureza',
    latitude: -29.3662,
    longitude: -50.8644,
    descricao: 'Um lago amplo e lindo com vista para a serra, muito agradável para caminhar, descansar e apreciar a paisagem.',
    imagem:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Br 116 / Gramado'
  },
  {
    id: 7,
    nome: 'Praça das Etnias',
    categoria: 'cultura',
    latitude: -29.3742,
    longitude: -50.872,
    descricao: 'Espaço de convivência e cultura, com arquitetura charmosa e um ambiente perfeito para conhecer o centro da cidade.',
    imagem:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Centro Histórico'
  },
  {
    id: 8,
    nome: 'Palácio dos Festivais',
    categoria: 'cultura',
    latitude: -29.3769,
    longitude: -50.8686,
    descricao: 'Principal palco cultural da cidade, conhecido por eventos, exposições e grande tradição no turismo de Gramado.',
    imagem:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Centro de Gramado'
  },
  {
    id: 9,
    nome: 'Museu de Cera Dreamland',
    categoria: 'cultura',
    latitude: -29.3767,
    longitude: -50.8698,
    descricao: 'Uma visita divertida para admirar esculturas em cera e encantar-se com personagens e cenários famosos.',
    imagem:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Av. das Hortênsias'
  },
  {
    id: 10,
    nome: 'Gramado Zoo',
    categoria: 'natureza',
    latitude: -29.366,
    longitude: -50.8847,
    descricao: 'Um espaço para observação de animais em um ambiente natural, muito interessante para famílias e amantes da fauna.',
    imagem:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Estrada da Serra'
  },
  {
    id: 11,
    nome: 'Fonte do Amor Eterno',
    categoria: 'arquitetura',
    latitude: -29.373,
    longitude: -50.8755,
    descricao: 'Um monumento romântico e muito fotografado, com belo cenário e simbolismo muito representativo da cidade.',
    imagem:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Centro de Gramado'
  },
  {
    id: 12,
    nome: 'Rua Torta',
    categoria: 'gastronomia',
    latitude: -29.3771,
    longitude: -50.8724,
    descricao: 'Uma das ruas mais conhecidas para provar doces, chocolates, cafés e delícias típicas da região.',
    imagem:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    localizacao: 'Centro Histórico'
  }
];

const categoryConfig = {
  todos: { label: 'Todos', icon: '📍' },
  cultura: { label: 'Cultura', icon: '🏛️' },
  natureza: { label: 'Natureza', icon: '🌳' },
  gastronomia: { label: 'Gastronomia', icon: '🍫' },
  lazer: { label: 'Lazer', icon: '🎡' },
  arquitetura: { label: 'Arquitetura', icon: '⛪' }
};

const state = {
  map: null,
  markers: {},
  activeCategory: 'todos',
  searchTerm: '',
  userMarker: null,
  currentModalSpotId: null
};

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  bindEvents();
  loadTouristSpots();
  hideLoadingOverlay();
});

function initMap() {
  const gramadoCenter = [-29.378, -50.873];

  state.map = L.map('map', {
    zoomControl: true,
    attributionControl: true
  }).setView(gramadoCenter, 12.5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(state.map);

  L.control.scale({ metric: true, imperial: false }).addTo(state.map);
}

function bindEvents() {
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const touristList = document.getElementById('touristList');
  const centerMapBtn = document.getElementById('centerMapBtn');
  const userLocationBtn = document.getElementById('userLocationBtn');
  const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
  const modal = document.getElementById('touristModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFocusBtn = document.getElementById('modalFocusBtn');

  searchInput.addEventListener('input', (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderTouristList();
    updateMarkerVisibility();
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveCategory(button.dataset.category);
    });
  });

  touristList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="focus"]');
    const detailButton = event.target.closest('[data-action="details"]');

    if (button) {
      focusOnSpot(Number(button.dataset.spotId));
      return;
    }

    if (detailButton) {
      openTouristModal(Number(detailButton.dataset.spotId));
    }
  });

  document.addEventListener('click', (event) => {
    const popupButton = event.target.closest('[data-popup-action="details"]');
    if (popupButton) {
      openTouristModal(Number(popupButton.dataset.spotId));
    }
  });

  centerMapBtn.addEventListener('click', () => {
    state.map.flyTo([-29.378, -50.873], 12.5, { duration: 1.5 });
    showToast('Voltando ao centro de Gramado.');
  });

  userLocationBtn.addEventListener('click', showUserLocation);

  mobileSidebarToggle.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('is-open');
  });

  closeModalBtn.addEventListener('click', closeTouristModal);
  modalCloseBtn.addEventListener('click', closeTouristModal);
  modalFocusBtn.addEventListener('click', () => {
    closeTouristModal();
    focusOnSpot(state.currentModalSpotId);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-modal="true"]')) {
      closeTouristModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTouristModal();
    }
  });
}

function loadTouristSpots() {
  touristSpots.forEach((spot) => {
    const marker = createMarker(spot);
    state.markers[spot.id] = marker;
  });

  renderTouristList();
  updateMarkerVisibility();
}

function createMarker(spot) {
  const customIcon = L.divIcon({
    className: `custom-marker ${spot.categoria}`,
    html: `<div class="marker-badge">${categoryConfig[spot.categoria].icon}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });

  const marker = L.marker([spot.latitude, spot.longitude], {
    icon: customIcon
  }).bindPopup(createPopupMarkup(spot));

  marker.on('popupopen', () => {
    state.currentModalSpotId = spot.id;
  });

  marker.addTo(state.map);
  return marker;
}

function createPopupMarkup(spot) {
  return `
    <div class="popup-card">
      <img src="${spot.imagem}" alt="${spot.nome}" />
      <div class="popup-body">
        <span class="popup-category">${categoryConfig[spot.categoria].icon} ${categoryConfig[spot.categoria].label}</span>
        <h4>${spot.nome}</h4>
        <p>${spot.descricao}</p>
        <button
          type="button"
          class="primary-btn popup-details-btn"
          data-popup-action="details"
          data-spot-id="${spot.id}"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  `;
}

function renderTouristList() {
  const touristList = document.getElementById('touristList');
  const resultsCount = document.getElementById('resultsCount');
  const filteredSpots = getFilteredSpots();

  resultsCount.textContent = String(filteredSpots.length);

  if (!filteredSpots.length) {
    touristList.innerHTML = `
      <div class="empty-state">
        Nenhum ponto turístico encontrado.
      </div>
    `;
    return;
  }

  touristList.innerHTML = filteredSpots
    .map(
      (spot) => `
        <article class="tourist-card" aria-label="${spot.nome}">
          <div class="tourist-card-image">
            <img src="${spot.imagem}" alt="${spot.nome}" />
          </div>

          <div class="tourist-card-body">
            <span class="card-category">${categoryConfig[spot.categoria].icon} ${categoryConfig[spot.categoria].label}</span>
            <h4>${spot.nome}</h4>
            <p>${spot.descricao}</p>

            <div class="card-actions">
              <button
                type="button"
                class="primary-btn"
                data-action="focus"
                data-spot-id="${spot.id}"
              >
                Ver no mapa
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function setActiveCategory(category) {
  state.activeCategory = category;

  document.querySelectorAll('.filter-btn').forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  renderTouristList();
  updateMarkerVisibility();
}

function getFilteredSpots() {
  const currentCategory = state.activeCategory;
  const searchValue = state.searchTerm;

  return touristSpots.filter((spot) => {
    const matchesCategory = currentCategory === 'todos' || spot.categoria === currentCategory;
    const matchesSearch = !searchValue ||
      spot.nome.toLowerCase().includes(searchValue) ||
      spot.descricao.toLowerCase().includes(searchValue) ||
      spot.localizacao.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });
}

function updateMarkerVisibility() {
  const filteredIds = new Set(getFilteredSpots().map((spot) => spot.id));

  touristSpots.forEach((spot) => {
    const marker = state.markers[spot.id];
    if (!marker) return;

    if (filteredIds.has(spot.id)) {
      if (!state.map.hasLayer(marker)) {
        marker.addTo(state.map);
      }
    } else {
      if (state.map.hasLayer(marker)) {
        marker.remove();
      }
    }
  });
}

function focusOnSpot(spotId) {
  const spot = touristSpots.find((item) => item.id === spotId);
  if (!spot) return;

  const filteredIds = new Set(getFilteredSpots().map((item) => item.id));
  if (!filteredIds.has(spot.id)) {
    state.searchTerm = '';
    document.getElementById('searchInput').value = '';
    setActiveCategory('todos');
  }

  const marker = state.markers[spot.id];
  if (!marker) return;

  state.map.flyTo([spot.latitude, spot.longitude], 14, { duration: 1.6 });

  setTimeout(() => {
    marker.openPopup();
  }, 500);
}

function openTouristModal(spotId) {
  const spot = touristSpots.find((item) => item.id === spotId);
  if (!spot) return;

  state.currentModalSpotId = spot.id;

  document.getElementById('modalImage').src = spot.imagem;
  document.getElementById('modalImage').alt = spot.nome;
  document.getElementById('modalCategory').textContent = `${categoryConfig[spot.categoria].icon} ${categoryConfig[spot.categoria].label}`;
  document.getElementById('modalTitle').textContent = spot.nome;
  document.getElementById('modalDescription').textContent = spot.descricao;
  document.getElementById('modalLocation').textContent = `📍 ${spot.localizacao}`;

  const modal = document.getElementById('touristModal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeTouristModal() {
  const modal = document.getElementById('touristModal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

function showUserLocation() {
  if (!navigator.geolocation) {
    showToast('Seu navegador não suporta geolocalização.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];

      if (!state.userMarker) {
        state.userMarker = L.circleMarker(coords, {
          radius: 10,
          color: '#173b32',
          fillColor: '#c9a45c',
          fillOpacity: 0.9,
          weight: 3
        }).addTo(state.map);

        state.userMarker.bindPopup('Você está aqui.');
      } else {
        state.userMarker.setLatLng(coords);
      }

      state.map.flyTo(coords, 13, { duration: 1.3 });
      state.userMarker.openPopup();
      showToast('Sua localização foi marcada no mapa.');
    },
    () => {
      showToast('Permita o acesso à localização para usar este recurso.');
    },
    {
      enableHighAccuracy: true,
      timeout: 12000
    }
  );
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function hideLoadingOverlay() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  setTimeout(() => {
    loadingOverlay.classList.add('hidden');
  }, 500);
}
