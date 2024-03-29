import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransferComponent } from './transfer/transfer.component';
import { WalletComponent } from './wallet/wallet.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: SignUpComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: "transfer", component: TransferComponent },
  { path: "withdraw", component: WithdrawComponent },
  { path: "wallet", component: WalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ LoginComponent, SignUpComponent, DashboardComponent ]