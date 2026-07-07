// api/cal-book.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { eventTypeId, start, name, email, notes, timeZone } = req.body || {}

  if (!eventTypeId || !start || !name || !email) {
    return res.status(400).json({ error: 'Missing required booking fields' })
  }

  const tz = timeZone || 'America/New_York'

  try {
    const calRes = await fetch('https://api.cal.com/v2/bookings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        'Content-Type': 'application/json',
        'cal-api-version': '2024-08-13',
      },
      body: JSON.stringify({
        start,
        eventTypeId: Number(eventTypeId),
        attendee: {
          name,
          email,
          timeZone: tz,
          language: 'en',
        },
        metadata: notes ? { notes } : undefined,
      }),
    })

    const data = await calRes.json()

    if (!calRes.ok) {
      return res.status(calRes.status).json({ error: data?.error?.message || 'Booking failed', raw: data })
    }

    return res.status(200).json({ booking: data })
  } catch (err) {
    console.error('cal-book error:', err)
    return res.status(500).json({ error: 'Server error creating booking' })
  }
}
