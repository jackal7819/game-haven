

export const faqData = [
  {
    id: 0,
    title: "Orders & products",
    subtitle: "Support for key activation and product information.",
    questions: [
      {
        id: 0,
        question: 'How do I activate a game key I\'ve purchased?',
        answer: (
          ` <p>To activate a game key you've purchased from our site, follow these steps:</p>
          <ol>
            <li>1. Log in to your account on our platform.</li>
        <li>2. Navigate to the 'My Games' section or its equivalent where your purchased games are listed.</li>
        <li>3. Find the game associated with your key and select the option to activate or redeem the game.</li>
        <li>4. Enter the game key when prompted and follow any additional instructions provided to complete the activation process.</li>
        </ol>
        <p>If you encounter any issues, please consult our detailed FAQ or contact our customer support team for assistance.</p>
        `
        ),
      },
      {
        id: 1,
        question: 'Where can I find installation instructions for my game?',
        answer: 'Installation instructions can be found in the "My Games" section under each game\'s details page.',
      },
      {
        id: 2,
        question: 'What should I do if my game key isn\'t working?',
        answer: 'If your game key isn\'t working, please contact our customer support team for assistance.',
      },
    ]
  },
  {
    id: 1,
    title: "Payment",
    subtitle: "Help with resolving any payment-related issues or questions.",
    questions: [
      {
        id: 4,
        question: 'How can I update my payment information?',
        answer: 'You can update your payment information in the "Account Settings" section.',
      },
      {
        id: 5,
        question: 'What payment methods are accepted?',
        answer: 'We accept various payment methods including credit cards, PayPal, and more.',
      },
    ]
  },
  {
    id: 2,
    title: "Account & Security",
    subtitle: "Assistance with account management and security",
    questions: [
      {
        id: 6,
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking on "Forgot Password" on the login page.',
      },
      {
        id: 7,
        question: 'How do I enable two-factor authentication?',
        answer: 'You can enable two-factor authentication in the "Security Settings" section.',
      },
    ]
  }
]


export const options = ["General query", "Support", "Feedback"]