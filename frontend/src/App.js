import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './App.css';
import './animation.css';
import './buttonanimation.css';
import Nav from './Components/Nav/Nav';
import Adoptionpage from './Pages/Adoptionpage';
import Homepage from './Pages/Homepage';
import Onboarding from './Pages/Onboarding';
import AdoptionAnimalProfile from './Pages/AdoptionAnimalProfile';
import AdoptionRequestPage from './Pages/AdoptionRequestPage';
import AdoptionRequestConfirmationPage from './Pages/AdoptionRequestConfirmationPage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import MissingAnimalPage from './Pages/MissingAnimalPage';
import DonationPostPage from './Pages/DonationPostPage';
import MissingAnimalProfilePage from './Pages/MissingAnimalProfilePage';
import CreateAdoptionPost from './Pages/CreateAdoptionPost';
import UserProfilepage from './Pages/UserProfilePage';
import UserAdoptionPostsPage from './Pages/UserAdoptionPostsPage';
import UserAdoptionRequestsPage from './Pages/UserAdoptionRequestsPage';
import UserAdoptionRequestDetailsPage from './Pages/UserAdoptionRequestDetailsPage';
import UserMissingAnimalPostsPage from './Pages/UserMissingAnimalPostsPage';
import DonationPostDetailsPage from './Pages/DonationPostDetailsPage';
import ContactPage from './Pages/ContactPage';
import CreateMissingPost from './Pages/CreateMissingPostpage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import PasswordResetRequestSentPage from './Pages/PasswordResetRequestSentPage';
import ForgotPasswordResetPage from './Pages/ForgotPasswordResetPage';
import UserAdoptionDetailsPage from './Pages/UserAdoptionPostDetailsPage';
import UserProfileEditPage from './Pages/UserProfileEditPage';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import UserAdoptionPostDetailsPage from './Pages/UserAdoptionPostDetailsPage';
import UserMissingPostDetailsPage from './Pages/UserMissingPostDetailsPage';
import RegistrationCompletePage from './Pages/RegistrationCompletePage';
import CreateDonationPage from './Pages/CreateDonationPostPage';
import AdminDonationPostsPage from './Pages/AdminDonationPostsPage';
import AdminDonationPostDetailsPage from './Pages/AdminDonationPostDetailsPage';
import AccountVerificationConfirmationPage from './Pages/AccountVerificationConfirmationPage';
import UserDonationListPage from './Pages/UserDonationListPage';
import AdminUserListPage from './Pages/AdminUserListPage';
import AdminAdoptionRequestsPage from './Pages/AdminAdoptionRequestsPage';
import AdminAdoptionPostsPage from './Pages/AdminAdoptionPostsPage';
import AdminMissingPostsPage from './Pages/AdminMissingPostspage';
import AdminMissingInformationsPage from './Pages/AdminMissingInformationsPage';
import AdminMissingInformationDetailsPage from './Pages/AdminMissingInformationDetailsPage';
import AdminFeedbackPage from './Pages/AdminFeedbackPage';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Nav />
          <Routes>
            <Route
              path="/missing/:id"
              element={<MissingAnimalProfilePage />}
              exact
            />
            <Route
              path="/ongoingdonations/:id"
              element={<DonationPostDetailsPage />}
              exact
            />
            <Route
              path="/ongoingdonations"
              element={<DonationPostPage />}
              exact
            />
            <Route path="/missing" element={<MissingAnimalPage />} exact />
            <Route
              path="/reset/:token"
              element={<ForgotPasswordResetPage />}
              exact
            />
            <Route
              path="/forgot/:email"
              element={<PasswordResetRequestSentPage />}
              exact
            />
            <Route path="/forgot" element={<ForgotPasswordPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route
              path="/registration/complete"
              element={<RegistrationCompletePage />}
              exact
            />
            <Route path="/registration" element={<RegistrationPage />} exact />
            <Route
              path="/adoption/request/success"
              element={<AdoptionRequestConfirmationPage />}
              exact
            />
            <Route
              path="/missing/:id/createpost"
              element={<CreateMissingPost />}
              exact
            />
            <Route
              path="/donation/createpost"
              element={<CreateDonationPage />}
              exact
            />
            <Route
              path="/adoption/:id/createpost"
              element={<CreateAdoptionPost />}
              exact
            />
            <Route
              path="/adoption/:id/user/:uid/createadoptionrequest"
              element={<AdoptionRequestPage />}
              exact
            />
            <Route
              path="/adoption/:id"
              element={<AdoptionAnimalProfile />}
              exact
            />
            <Route
              path="/user/missing/:id"
              element={<UserMissingPostDetailsPage />}
              exact
            />
            <Route
              path="/user/adoption/:id"
              element={<UserAdoptionPostDetailsPage />}
              exact
            />
            <Route
              path="/user/:uid/adoption/request/:id"
              element={<UserAdoptionRequestDetailsPage />}
              exact
            />
            <Route
              path="/user/profile/:id/donations"
              element={<UserDonationListPage />}
              exact
            />
            <Route
              path="/user/profile/:id/adoptionrequests"
              element={<UserAdoptionRequestsPage />}
              exact
            />
            <Route
              path="/user/profile/:id/missingposts"
              element={<UserMissingAnimalPostsPage />}
              exact
            />
            <Route
              path="/user/profile/:id/adoptionposts"
              element={<UserAdoptionPostsPage />}
              exact
            />
            <Route
              path="/user/profile/:id/edit"
              element={<UserProfileEditPage />}
              exact
            />
            <Route
              path="/admin/missingposts"
              element={<AdminMissingPostsPage />}
              exact
            />
            <Route
              path="/admin/feedback"
              element={<AdminFeedbackPage />}
              exact
            />
            <Route
              path="/admin/adoptionposts"
              element={<AdminAdoptionPostsPage />}
              exact
            />
            <Route
              path="/admin/adoption/request"
              element={<AdminAdoptionRequestsPage />}
              exact
            />
            <Route
              path="/admin/missing/info/:id"
              element={<AdminMissingInformationDetailsPage />}
              exact
            />
            <Route
              path="/admin/missing/info"
              element={<AdminMissingInformationsPage />}
              exact
            />
            <Route path="/admin/user" element={<AdminUserListPage />} exact />
            <Route
              path="/admin/donation/post/:id/edit"
              element={<AdminDonationPostDetailsPage />}
              exact
            />
            <Route
              path="/admin/donation/posts"
              element={<AdminDonationPostsPage />}
              exact
            />
            <Route
              path="/auth/verify/:token"
              element={<AccountVerificationConfirmationPage />}
              exact
            />
            <Route
              path="/user/profile/:id"
              element={<UserProfilepage />}
              exact
            />
            <Route path="/adoption" element={<Adoptionpage />} exact />
            <Route path="/contact" element={<ContactPage />} exact />
            <Route path="/dashboard" element={<AdminDashboardPage />} exact />
            <Route path="/home" element={<Homepage />} exact />
            <Route path="/" element={<Onboarding />} exact />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
