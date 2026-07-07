// api/cal-slots.js
export default async function handler(req, res) {
  const { eventTypeId, date, timeZone } = req.query

  if (!eventTypeId || !date) {
    return res.status(400).json({ error: 'Missing eventTypeId or date' })
  }

  const tz = timeZone || 'America/New_York'

  try {
    const url = new URL('https://api.cal.com/v2/slots')
    url.searchParams.set('eventTypeId', eventTypeId)
    url.searchParams.set('start', date)
    url.searchParams.set('end', date)
    url.searchParams.set('timeZone', tz)

    const calRes = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        'cal-api-version': '2024-09-04',
      },
    })

    const data = await calRes.json()

    if (!calRes.ok) {
      return res.status(calRes.status).json({ error: data?.error?.message || 'Failed to fetch slots', raw: data })
    }

    const slotsByDate = data?.data ?? {}
    const daySlots = slotsByDate[date] ?? Object.values(slotsByDate)[0] ?? []

    return res.status(200).json({ slots: daySlots })
  } catch (err) {
    console.error('cal-slots error:', err)
    return res.status(500).json({ error: 'Server error fetching slots' })
  }
}
