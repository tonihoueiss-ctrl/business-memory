self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {
    const data = event.data ? event.data.json() : {};

    event.waitUntil(
        self.registration.showNotification(
            data.title || "🔔 CARE Reminder",
            {
                body: data.body || "You have a CARE reminder.",
                icon: data.icon || "",
                badge: data.badge || ""
            }
        )
    );
});
