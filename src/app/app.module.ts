import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { SocialImpactComponent } from './pages/social-impact/social-impact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoanRequestComponent } from './pages/loan-request/loan-request.component';
import { LoanHistoryComponent } from './pages/loan-history/loan-history.component';
import { LoanDetailComponent } from './pages/loan-detail/loan-detail.component';
import { AmortizationComponent } from './pages/amortization/amortization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    SocialImpactComponent,
    AboutUsComponent,
    LoginComponent,
    AdminDashboardComponent,
    ClientDashboardComponent,
    RegisterComponent,
    DashboardComponent,
    LoanRequestComponent,
    LoanHistoryComponent,
    LoanDetailComponent,
    AmortizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
