export async function POST(request) {
  try {
    const data = await request.json();
    
    // For now, just log the submission and return success
    // In production, this would save to a database
    console.log('Waitlist submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      interest: data.interest,
      referred_by: data.referredBy || null,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Thank you for joining our waitlist! We will contact you soon.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to process your request. Please try again.' 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 