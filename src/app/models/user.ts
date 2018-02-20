export interface User {
  email         :  string;
  token         :  string;
  firstName     :  string;
  lastName      :  string;
  points        :  number;
  bonusPoints   :  number;
  admin         :  boolean;
  locked        :  boolean;
}