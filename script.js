document.addEventListener("DOMContentLoaded", () => {
  console.log("SCRIPT LOADED");

  const artistData = {
    artist1: {
      name: "Naam deelnemer 1",
      date: "12–13 juli 2026",
      theme: "Thema: Intieme Sporen",
      reason:
        "Deze maker kiest voor Steentje omdat de huiselijke ruimte perfect past bij klein, intiem werk en een directe ontmoeting met bezoekers. Tijdens dit weekend ligt de focus op verstilling, materiaal en nabijheid.",
      works: [
        { src: "images/work-1.jpg", alt: "Werk 1 van deelnemer 1" },
        { src: "images/work-2.jpg", alt: "Werk 2 van deelnemer 1" },
        { src: "images/work-3.jpg", alt: "Werk 3 van deelnemer 1" }
      ]
    },
    artist2: {
      name: "Naam deelnemer 2",
      date: "19–20 juli 2026",
      theme: "Thema: Binnenkamers",
      reason:
        "Deze deelnemer wil via Steentje werk tonen dat inspeelt op herinnering, wonen en tijdelijke aanwezigheid. De kamer wordt gebruikt als deel van het werk zelf, niet alleen als achtergrond.",
      works: [
        { src: "images/work-1.jpg", alt: "Werk 1 van deelnemer 2" },
        { src: "images/work-2.jpg", alt: "Werk 2 van deelnemer 2" },
        { src: "images/work-3.jpg", alt: "Werk 3 van deelnemer 2" }
      ]
    },
    artist3: {
      name: "Naam deelnemer 3",
      date: "26–27 juli 2026",
      theme: "Thema: Stil Materiaal",
      reason:
        "Voor deze maker is Steentje interessant omdat het project ruimte laat voor experiment, ontmoeting en een persoonlijke opstelling. Het weekend wordt een mix van expo, sfeer en zachte interventie.",
      works: [
        { src: "images/work-1.jpg", alt: "Werk 1 van deelnemer 3" },
        { src: "images/work-2.jpg", alt: "Werk 2 van deelnemer 3" },
        { src: "images/work-3.jpg", alt: "Werk 3 van deelnemer 3" }
      ]
    }
  };

  const artistCards = document.querySelectorAll(".artist-card");
  const artistModal = document.getElementById("artistModal");
  const closeArtistModalBtn = document.getElementById("closeArtistModal");
  const modalBackdrop = document.querySelector(".artist-modal-backdrop");

  const modalArtistName = document.getElementById("modalArtistName");
  const modalArtistDate = document.getElementById("modalArtistDate");
  const modalArtistTheme = document.getElementById("modalArtistTheme");
  const modalArtistReason = document.getElementById("modalArtistReason");
  const modalArtistGallery = document.getElementById("modalArtistGallery");

  function openArtistModal(artistKey) {
    const artist = artistData[artistKey];
    if (!artist) return;

    modalArtistName.textContent = artist.name;
    modalArtistDate.textContent = artist.date;
    modalArtistTheme.textContent = artist.theme;
    modalArtistReason.textContent = artist.reason;

    modalArtistGallery.innerHTML = "";

    artist.works.forEach((work) => {
      const img = document.createElement("img");
      img.src = work.src;
      img.alt = work.alt;
      modalArtistGallery.appendChild(img);
    });

    artistModal.classList.add("active");
    artistModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeArtistModal() {
    artistModal.classList.remove("active");
    artistModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  artistCards.forEach((card) => {
    card.addEventListener("click", () => {
      const artistKey = card.dataset.artist;
      openArtistModal(artistKey);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const artistKey = card.dataset.artist;
        openArtistModal(artistKey);
      }
    });

    card.setAttribute("tabindex", "0");
  });

  if (closeArtistModalBtn) {
    closeArtistModalBtn.addEventListener("click", closeArtistModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeArtistModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && artistModal && artistModal.classList.contains("active")) {
      closeArtistModal();
    }
  });

     const interestForm = document.getElementById("interestForm");

  if (interestForm) {
    interestForm.addEventListener("submit", () => {
      setTimeout(() => {
        alert("Bedankt! Je aanvraag is verzonden.");
      }, 300);
    });
  }
});
