package haythem.project.auth;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter @Setter
@Builder
@AllArgsConstructor @NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationRequest {
    String email;
    String password;
}
